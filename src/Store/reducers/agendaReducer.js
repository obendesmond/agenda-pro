import {
  ADD_AGENDA_FAIL,
  ADD_AGENDA_REQUEST,
  ADD_AGENDA_SUCCESS,
  GET_AGENDA_LIST_FAIL,
  GET_AGENDA_LIST_REQUEST,
  GET_AGENDA_LIST_SUCCESS,
} from "../constants/agendaConstants";

const initialState = {
  agendaList: [],
  error: null,
  currentAgenda: {
    id: 11234,
    time: "Time",
    subject: "Subject 1",
    location: "Location",
    description: "Description",
  },
};

export const agendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AGENDA_LIST_REQUEST:
      return { ...state, G_loading: true };
    case GET_AGENDA_LIST_SUCCESS:
      return { ...state, G_loading: false, agendaList: action.payload };
    case GET_AGENDA_LIST_FAIL:
      return { ...state, G_loading: false, error: action.payload };
    case ADD_AGENDA_REQUEST:
      return { ...state, A_loading: true };
    case ADD_AGENDA_SUCCESS:
      const newAg = [action.payload, ...state.agendaList];
      return { ...state, A_loading: false, agendaList: newAg };
    case ADD_AGENDA_FAIL:
      return { ...state, A_loading: false, error: action.payload };
    default:
      return state;
  }
};
