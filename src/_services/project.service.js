import config from 'config';
import { authHeader } from '../_helpers';
import {history} from '../_helpers/history'


export const projectService = {
    getProjects,
    createProjects,
    createSong,
    changeCellStatus
};

function getProjects(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(), 
    };
    // console.log('getProjects service')
    return fetch(`${config.apiUrl}/projects/${user}/`, requestOptions)
    .then(handleResponse)
    .then(projects => {
        localStorage.setItem('userProjects', JSON.stringify(projects))
        return projects;
    });
}

function createProjects(newProject){
    console.log('createProject Service')
    console.log(newProject)
    const requestOptions ={
        method:'POST',
        headers: authHeader(1),
        body: JSON.stringify({ newProject })
    }
    console.log(requestOptions)
    return fetch(`${config.apiUrl}/projects/`, requestOptions)
    .then(handleResponse)
    .then(history.push('/dashboard'))
}

function createSong(newSong){
    console.log('createSong Service')
    console.log(newSong)
    const requestOptions ={
        method:'PUT',
        headers: authHeader(1),
        body: JSON.stringify({ newSong })
    }
    console.log(requestOptions)
    return fetch(`${config.apiUrl}/projects/songs/`, requestOptions)
    .then(handleResponse)
    .then(history.push('/dashboard'))
}


function changeCellStatus(project, song, instrument, status,id, user) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: {user: user}
    };
    // console.log(`${config.apiUrl}/projects/project/${project}/song/${song}/instrument/${instrument}/status/${status}/id/${id}`)
    return fetch(`${config.apiUrl}/projects/project/${project}/song/${song}/instrument/${instrument}/status/${status}/id/${id}`, requestOptions)
    .then(handleResponse)
    // .then(projects => {
    //     localStorage.setItem('userProjects', JSON.stringify(projects))
    // }
    
    // )
}




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


