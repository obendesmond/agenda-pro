import { errHandler } from "../../utils/errHandler";
import {
  GET_AGENDA_LIST_FAIL,
  GET_AGENDA_LIST_REQUEST,
  GET_AGENDA_LIST_SUCCESS,
} from "../constants/agendaConstants";

export const getAgendaList = () => dispatch => {
  try {
    dispatch({ type: GET_AGENDA_LIST_REQUEST });

    dispatch({ type: GET_AGENDA_LIST_SUCCESS, payload: [] });
  } catch (error) {
    errHandler(GET_AGENDA_LIST_FAIL, error, dispatch);
  }
};
