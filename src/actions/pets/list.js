export const PET_LIST = "PET_LIST";
export const PET_LOADING = "PET_LOADING";
export const PET_ERROR = "PET_ERROR";

export const data = (data) => ({
  type: PET_LIST,
  data,
});

export const loading = (loading) => ({
  type: PET_LOADING,
  loading,
});

export const error = (error) => ({
  type: PET_ERROR,
  error,
});

export const listPets = () => {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(error(null));
    fetch(`${process.env.REACT_APP_SERVER}/mascotas`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(data(response));
      })
      .catch((e) => {
        console.log(e);
        dispatch(error(e));
      })
      .finally(() => dispatch(loading(false)));
  };
};
