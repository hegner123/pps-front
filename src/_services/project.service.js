import config from 'config';
import { authHeader } from '../_helpers';




export const projectService = {
    getProjects,
};

function getProjects(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    console.log('getProjects service')
    return fetch(`${config.apiUrl}/projects/userprojects/${id}`, requestOptions)
    .then(handleResponse)
    .then(projects => {
        
        localStorage.setItem('hasProjects', JSON.stringify(projects))
        return projects;
    });
}

// function getProjects(id) {
//     return axios.get("http://localhost:4000/projects/userprojects/" + id).then(
//         projects => handleResponse(projects));
//   }
//   getProjects('michael')


function handleResponse(response) {
    return response.text().then(text => {
        const userData = text && JSON.parse(text);
        return userData;
    });
}





// export default {
//   // Gets all projects
//   getProjects: function(id) {
//     return axios.get("/api/projects/userprojects/" + id);
//   },
//     // Gets the project with the given id
//   getProjectDetails: function(id) {
//     return axios.get("/api/projects/" + id);
//   },
//   updateProject: function (id, projectData) {
//     return axios.put("/api/projects/" + id, projectData);
//   },
//   addNote: function (id, noteData) {
//     return axios.put("/api/projects/note/add/" + id, noteData);
//   },
//   removeNote: function (id, noteData) {
//     return axios.put("/api/projects/note/remove/" + id, noteData);
//   },

//   saveProject: function(id,projectData) {
//     return axios.post("/api/projects/userprojects/" + id, projectData);
//   },
//   saveSong: function(id, songData) {
//     return axios.post("/api/projects/userprojects/" + id +"/songs", songData);
//   },
//   deleteProject: function(id){
//     return axios.delete("/api/projects/" + id)
//   },
//   saveInstruments: function (id, instrumentData){
//     return axios.post("/api/projects/song/arrangement/" + id , instrumentData)
//   },

//   spotifyPreview: function (song){
//     return axios.get("/api/song-preview/" + song)
//   }



// };


