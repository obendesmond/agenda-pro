const initialState = {
  time: "text time",
  subject: "test subject",
  location: "test location",
  description: "test description",
};

export const agendaReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
