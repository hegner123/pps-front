import { projectConstants } from "../_constants";

const url = window.location.pathname;
const first = url.replace("/project/", "");
const id = first.replace("/new-song/", "");

const projects = JSON.parse(localStorage.getItem("userProjects"));
let current;

if (url.includes("/project/")) {
  projects.forEach((project) => {
    if (project.projectSlug === id) {
      current = project;
    }
  });
}

const initialState = projects
  ? { projects: projects, current: current, selected: 0 }
  : { projects: "unset", selected: 0 };

export function userData(state = initialState, action) {
  switch (action.type) {
    case projectConstants.GETALL_SUCCESS:
      return {
        ...state,
        projects: action.projects,
      };
    case projectConstants.GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case projectConstants.STATUS_REQUEST:
      return {
        ...state,
        action: action.request,
      };
    case projectConstants.STATUS_SUCCESS:
      return {
        ...state,
        current: updateCurrent(action.status[0], action.status[1], current),
      };
    case projectConstants.ASSIGN_PROJECT:
      return {
        ...state,
        current: action.project,
      };
    case projectConstants.CLEAR_PROJECT:
      return {
        ...state,
        current: {},
      };
    case projectConstants.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        create: action.create,
      };
    case projectConstants.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        create: action.error,
      };
    case projectConstants.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        delete: action.delete,
      };
    case projectConstants.DELETE_PROJECT_FAILURE:
      return {
        ...state,
        delete: action.error,
      };
    case projectConstants.CREATE_SONG_SUCCESS:
      return {
        ...state,
        create: action.create,
      };
    case projectConstants.CREATE_SONG_FAILURE:
      return {
        ...state,
        create: action.error,
      };
    case projectConstants.DELETE_SONG_SUCCESS:
      return {
        ...state,
        songDelete: action.results,
      };
    case projectConstants.DELETE_SONG_FAILURE:
      return {
        ...state,
        songDelete: action.error,
      };
    case projectConstants.SET_SELECTED:
      return {
        ...state,
        selected: action.selection,
      };
    default:
      return { ...state };
  }
}

function updateCurrent(value, desc, projects) {
  console.log(projects);
  let res;
  for (var i in projects.songs) {
    for (var j in projects.songs[i].song_status) {
      if (projects.songs[i].song_status[j]._id == value) {
        projects.songs[i].song_status[j].status = desc;
        res = projects;
        // localStorage.setItem('current', JSON.stringify(res))
        return res;
      }
    }
  }
}
