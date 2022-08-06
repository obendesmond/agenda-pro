export const errHandler = (type, error, dispatch) => {
  dispatch({
    type: type,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
};
