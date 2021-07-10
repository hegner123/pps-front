export function authHeader(opt) {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token && opt === 1) {
    return {
      Authorization: "Bearer " + user.token,
      "Content-Type": "application/json",
    };
  } else if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
