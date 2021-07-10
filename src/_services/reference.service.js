import config from "config";
import { authHeader } from "../_helpers";

export const referenceService = {
  spotifyPreview,
};

function spotifyPreview(song) {
  const search = song.trim().toLowerCase().replace(/\s/g, "-");
  const requestOptions = {
    method: "get",
    headers: authHeader(1),
  };
  return fetch(
    `${config.apiUrl}/song-preview/song/${search}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const songData = text && JSON.parse(text);
    return songData;
  });
}
