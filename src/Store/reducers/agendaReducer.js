import {
  GET_AGENDA_LIST_FAIL,
  GET_AGENDA_LIST_REQUEST,
  GET_AGENDA_LIST_SUCCESS,
} from "../constants/agendaConstants";

const initialState = {
  agendaList: [],
  loading: false,
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
      return { ...state, loading: true };
    case GET_AGENDA_LIST_SUCCESS:
      return { ...state, loading: false, agendaList: action.payload };
    case GET_AGENDA_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
