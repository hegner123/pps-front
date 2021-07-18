import { alertActions } from "./alert.actions";
import { projectConstants } from "../_constants";
import { projectService } from "../_services/";
import { userService } from "../_services/user.service";
import { store } from "../_helpers";
import { history } from "../_helpers";

export const projectActions = {
  getProjects,
  assignProject,
  createProject,
  deleteProject,
  createSong,
  deleteSong,
  changeCellStatus,
};

function getProjects() {
  const state = store.getState();
  const user = state.authentication.user.id;
  return (dispatch) => {
    dispatch(request());
    projectService.getProjects(user).then(
      (projects) => {
        dispatch(success(projects));
        dispatch(alertActions.success(user + " projects loaded!"));
        localStorage.setItem("userProjects", JSON.stringify(projects));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: projectConstants.GETALL_REQUEST };
  }
  function success(projects) {
    return { type: projectConstants.GETALL_SUCCESS, projects };
  }
  function failure(error) {
    return { type: projectConstants.GETALL_FAILURE, error };
  }
}

function assignProject(action, project) {
  let currentProject;
  const state = store.getState();
  const projects = state.userData.projects;
  const user = state.authentication.user.id;

  projects.forEach((data) => {
    if (data.projectSlug === project) {
      currentProject = data;
    }
  });
  switch (action) {
    case "assign":
      return (dispatch) => {
        userService.addToRecent(currentProject, user);
        dispatch(assign(currentProject));
      };
    case "clear":
      return (dispatch) => {
        dispatch(clear());
      };
    default:
      return {};
  }
  function assign(project) {
    return { type: projectConstants.ASSIGN_PROJECT, project };
  }
  function clear() {
    return { type: projectConstants.CLEAR_PROJECT };
  }
}

function createProject(newProject) {
  return (dispatch) => {
    projectService.createProjects(newProject).then(
      (create) => dispatch(success(create)),
      (error) => dispatch(failure(error))
    );
  };

  function success(create) {
    return { type: projectConstants.CREATE_PROJECT_SUCCESS, create };
  }
  function failure(error) {
    return { type: projectConstants.CREATE_PROJECT_FAILURE, error };
  }
}

function deleteProject(project) {
  return (dispatch) => {
    projectService.deleteProjects(project).then(
      (project) => dispatch(success(project)),
      (error) => dispatch(failure(error))
    );
  };

  function success(create) {
    return { type: projectConstants.DELETE_PROJECT_SUCCESS, create };
  }
  function failure(error) {
    return { type: projectConstants.DELETE_PROJECT_FAILURE, error };
  }
}

function createSong(newSong) {
  return (dispatch) => {
    projectService.createSong(newSong).then(
      (create) => {
        dispatch(success(create));
        getProjects();
      },
      (error) => dispatch(failure(error))
    );
  };

  function success(create) {
    return { type: projectConstants.CREATE_SONG_SUCCESS, create };
  }
  function failure(error) {
    return { type: projectConstants.CREATE_SONG_FAILURE, error };
  }
}

function deleteSong(song, id) {
  console.log(song);
  console.log(id);
  return (dispatch) => {
    projectService
      .deleteSong(song, id)
      .then((result) => dispatch(success(result))),
      (error) => dispatch(failure(error));
  };

  function success(result) {
    return { type: projectConstants.DELETE_SONG_SUCCESS, result };
  }
  function failure(error) {
    return { type: projectConstants.DELETE_SONG_FAILURE, error };
  }
}

function changeCellStatus(project, song, instrument, status, id) {
  const state = store.getState();
  const user = state.authentication.user.id;
  return (dispatch) => {
    dispatch(request());
    projectService
      .changeCellStatus(project, song, instrument, status, id, user)
      .then(
        (status) => dispatch(success(status)),
        (error) => dispatch(failure(error))
      );
    projectService.getProjects(user).then(
      (projects) => {
        localStorage.setItem("userProjects", JSON.stringify(projects));
      },
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: projectConstants.STATUS_REQUEST };
  }
  function success(status) {
    return { type: projectConstants.STATUS_SUCCESS, status };
  }
  function failure(error) {
    return { type: projectConstants.STATUS_FAILURE, error };
  }
}

export default projectActions;
