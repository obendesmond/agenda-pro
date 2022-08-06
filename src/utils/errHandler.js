export const errHandler = (type, error, dispatch) => {
  console.log(error);
  dispatch({
    type: type,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
};
