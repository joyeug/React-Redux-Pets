export const PERSON_LIST = 'PERSON_LIST'
export const PERSON_LOADING = 'PERSON_LOADING'
export const PERSON_ERROR = 'PERSON_ERROR'

export const data = (data) => ({
  type: PERSON_LIST,
  data
})

export const loading = (loading) => ({
  type: PERSON_LOADING,
  loading
})

export const error = (error) => ({
  type: PERSON_ERROR,
  error
})

export const list = () => {
  return (dispatch) => {
    dispatch(loading(true))
    dispatch(error(null))
    fetch(`${process.env.REACT_APP_SERVER}/usuarios`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      dispatch(data(response))
    })
    .catch((e) => {
      console.log(e)
      dispatch(error(e))
    })
    .finally(() => dispatch(loading(false)))
  }
}