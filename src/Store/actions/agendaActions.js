import { errHandler } from "../../Utils/errHandler";
import agendaListData from "../data/agendaListData";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_AGENDA_FAIL,
  ADD_AGENDA_REQUEST,
  ADD_AGENDA_SUCCESS,
  DELETE_AGENDA_FAIL,
  DELETE_AGENDA_REQUEST,
  DELETE_AGENDA_SUCCESS,
  DELETE_ALL_AGENDA_FAIL,
  DELETE_ALL_AGENDA_REQUEST,
  DELETE_ALL_AGENDA_SUCCESS,
  GET_AGENDA_LIST_FAIL,
  GET_AGENDA_LIST_REQUEST,
  GET_AGENDA_LIST_SUCCESS,
  UPDATE_AGENDA_FAIL,
  UPDATE_AGENDA_REQUEST,
  UPDATE_AGENDA_SUCCESS,
} from "../constants/agendaConstants";

// get all agenda
export const getAgendaList = () => dispatch => {
  try {
    dispatch({ type: GET_AGENDA_LIST_REQUEST });
    // get initial data list array (from db in the future)
    const agendaList = agendaListData;
    dispatch({ type: GET_AGENDA_LIST_SUCCESS, payload: agendaList });
  } catch (error) {
    errHandler(GET_AGENDA_LIST_FAIL, error, dispatch);
  }
};

// add agenda
export const addAgenda = agenda => dispatch => {
  try {
    dispatch({ type: ADD_AGENDA_REQUEST });
    // add agenda to db
    const payload = agenda.id
      ? agenda
      : {
          id: uuidv4(),
          ...agenda,
        };
    dispatch({
      type: ADD_AGENDA_SUCCESS,
      payload,
    });
  } catch (error) {
    errHandler(ADD_AGENDA_FAIL, error, dispatch);
  }
};

// delete agenda
export const deleteAgenda = id => dispatch => {
  try {
    dispatch({ type: DELETE_AGENDA_REQUEST });
    // delete agenda from db
    dispatch({ type: DELETE_AGENDA_SUCCESS, payload: id });
  } catch (error) {
    errHandler(DELETE_AGENDA_FAIL, error, dispatch);
  }
};

// update agenda
export const updateAgenda = id => dispatch => {
  try {
    dispatch({ type: UPDATE_AGENDA_REQUEST });
    // update agenda in db
    dispatch({ type: UPDATE_AGENDA_SUCCESS, payload: id });
  } catch (error) {
    errHandler(UPDATE_AGENDA_FAIL, error, dispatch);
  }
};

// delete all agenda
export const deleteAllAgenda = () => dispatch => {
  try {
    dispatch({ type: DELETE_ALL_AGENDA_REQUEST });
    // delete all agenda from db
    dispatch({ type: DELETE_ALL_AGENDA_SUCCESS });
  } catch (error) {
    errHandler(DELETE_ALL_AGENDA_FAIL, error, dispatch);
  }
};
