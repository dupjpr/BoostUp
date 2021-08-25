const actions = {
  loading: (boolean = false) => ({
    type: 'LOADING',
    payload: boolean
  }),
  getData: (data) => ({
    type: 'GET_PROFILE',
    payload: data
  }),
  error: (data) => ({
    type: 'ERROR',
    payload: data
  })
}

const { loading, getData, error } = actions;

const getDataAction = () => {
  return dispatch => {
    
    const url = 'data.json';
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(getData(data)));
      
  }
}

export { getDataAction };
