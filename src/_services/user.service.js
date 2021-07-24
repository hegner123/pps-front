import config from "config";
import { history } from "../_helpers";
import { authHeader } from "../_helpers";

export const userService = {
  login,
  logout,
  register,
  update,
  addToRecent,
  getById,
  delete: _delete,
};

function login(userName, hash) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, hash }),
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(1),
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("recent", JSON.stringify(user[0].recentProjects));

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("userProjects");
  localStorage.removeItem("user");
  localStorage.removeItem("recent");
  history.push("/");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(
    handleResponse
  );
}

function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(`${config.apiUrl}/${user.id}`, requestOptions).then(
    handleResponse
  );
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/${id}`, requestOptions).then(handleResponse);
}

function addToRecent(project, user) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(1),
    body: JSON.stringify(project),
  };
  return fetch(
    `${config.apiUrl}/users/addtorecent/${user}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
