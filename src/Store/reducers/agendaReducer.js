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

const initialState = {
  agendaList: [],
  error: null,
  currentAgendaEdit: {},
};

export const agendaReducer = (state = initialState, action) => {
  switch (action.type) {
    // READ AGENDA
    case GET_AGENDA_LIST_REQUEST:
      return { ...state, loading: true };
    case GET_AGENDA_LIST_SUCCESS:
      return { ...state, loading: false, agendaList: action.payload };
    case GET_AGENDA_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    // ADD AGENDA or UPDATE AGENDA
    case ADD_AGENDA_REQUEST:
      return { ...state, A_loading: true };
    case ADD_AGENDA_SUCCESS:
      const payL = action.payload;
      const agEdit = state.agendaList.find(a => a.id === payL.id);
      // if agenda is already in list
      if (agEdit) {
        agEdit.time = payL.time;
        agEdit.subject = payL.subject;
        agEdit.location = payL.location;
        agEdit.description = payL.description;
        // loop through and upade agenda
        const agendaList = [...state.agendaList].map(ag => {
          if (ag.id === agEdit.id) ag = agEdit;
          return ag;
        });
        console.log(agendaList);
        return {
          ...state,
          A_loading: false,
          agendaList: agendaList,
          currentAgendaEdit: {}, // reset agendaEdit
        };
      } else {
        return {
          ...state,
          A_loading: false,
          currentAgendaEdit: {}, // reset agendaEdit
          agendaList: [payL, ...state.agendaList], // a single agenda is payload here
        };
      }
    case ADD_AGENDA_FAIL:
      return { ...state, A_loading: false, error: action.payload };

    // DELETE AGENDA
    case DELETE_AGENDA_REQUEST:
      return { ...state, D_loading: true };
    case DELETE_AGENDA_SUCCESS:
      const oldAg = [...state.agendaList];
      const a = oldAg.filter(a => a.id !== action.payload); // id is payload here
      return { ...state, D_loading: false, agendaList: a };
    case DELETE_AGENDA_FAIL:
      return { ...state, D_loading: false };

    // UPDATE AGENDA
    case UPDATE_AGENDA_REQUEST:
      return { ...state, U_loading: true };
    case UPDATE_AGENDA_SUCCESS:
      const oldAg2 = [...state.agendaList];
      const AgEdit = oldAg2.filter(a => a.id === action.payload); // id is payload here
      return { ...state, U_loading: false, currentAgendaEdit: AgEdit[0] };
    case UPDATE_AGENDA_FAIL:
      return { ...state, U_loading: false };

    // DELETE ALL AGENDA
    case DELETE_ALL_AGENDA_REQUEST:
      return { ...state, loading: true };
    case DELETE_ALL_AGENDA_SUCCESS:
      return { ...state, loading: false, agendaList: [] };
    case DELETE_ALL_AGENDA_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};
