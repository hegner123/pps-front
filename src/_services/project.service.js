import config from "config";
import { authHeader } from "../_helpers";
import { history } from "../_helpers/history";

export const projectService = {
  getProjects,
  createProjects,
  deleteProjects,
  createSong,
  deleteSong,
  changeCellStatus,
};

async function getProjects(user) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/projects/${user}/`, requestOptions)
    .then(handleResponse)
    .then((projects) => {
      localStorage.setItem("userProjects", JSON.stringify(projects));
      return projects;
    });
}

async function createProjects(newProject) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(1),
    body: JSON.stringify({ newProject }),
  };
  return fetch(`${config.apiUrl}/projects/`, requestOptions)
    .then(handleResponse)
    .then(history.push("/dashboard"));
}

async function deleteProjects(project) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(1),
    body: JSON.stringify({ project }),
  };
  return fetch(`${config.apiUrl}/projects/`, requestOptions)
    .then(handleResponse)
    .then(history.push("/dashboard"));
}

async function createSong(newSong) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(1),
    body: JSON.stringify({ newSong }),
  };
  return fetch(`${config.apiUrl}/projects/songs/`, requestOptions)
    .then(handleResponse)
    .then(history.push(newSong.path));
}

async function deleteSong(song, id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(1),
    body: JSON.stringify({ id: id, songs: song }),
  };
  return fetch(`${config.apiUrl}/projects/songs/`, requestOptions).then(
    handleResponse
  );
}

async function changeCellStatus(project, song, instrument, status, id, user) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(1),
    body: JSON.stringify({ user: user }),
  };
  return fetch(
    `${config.apiUrl}/projects/project/${project}/song/${song}/instrument/${instrument}/status/${status}/id/${id}`,
    requestOptions
  ).then(handleResponse);
}

async function handleResponse(response) {
  return response.text().then((text) => {
    const userData = text && JSON.parse(text);

    return userData;
  });
}
