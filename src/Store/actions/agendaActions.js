import { errHandler } from "../../utils/errHandler";
import agendaListData from "../data/agendaListData";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_AGENDA_FAIL,
  ADD_AGENDA_REQUEST,
  ADD_AGENDA_SUCCESS,
  GET_AGENDA_LIST_FAIL,
  GET_AGENDA_LIST_REQUEST,
  GET_AGENDA_LIST_SUCCESS,
} from "../constants/agendaConstants";

// get all agenda
export const getAgendaList = () => dispatch => {
  try {
    dispatch({ type: GET_AGENDA_LIST_REQUEST });

    // get initial data list array
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

    dispatch({
      type: ADD_AGENDA_SUCCESS,
      payload: {
        id: uuidv4(),
        ...agenda,
      },
    });
  } catch (error) {}
};
