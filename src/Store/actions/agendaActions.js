import { errHandler } from "../../utils/errHandler";
import agendaListData from "../data/agendaListData";
import {
  GET_AGENDA_LIST_FAIL,
  GET_AGENDA_LIST_REQUEST,
  GET_AGENDA_LIST_SUCCESS,
} from "../constants/agendaConstants";

// get all agenda
export const getAgendaList = () => async dispatch => {
  try {
    dispatch({ type: GET_AGENDA_LIST_REQUEST });

    // get initial data list array
    const agendaList = agendaListData;

    dispatch({ type: GET_AGENDA_LIST_SUCCESS, payload: agendaList });
  } catch (error) {
    errHandler(GET_AGENDA_LIST_FAIL, error, dispatch);
  }
};
