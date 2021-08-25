const actions = {
  classify: (data) => ({
    type: 'CLASSIFY',
    payload: data
  }),
  filter: (data) => ({
    type: 'FILTER',
    payload: data
  }),
}

const { classify, filter } = actions;

const classifyData = ( dataOrder ) => {
  return dispatch => {
    dispatch(classify(dataOrder))
    dispatch(filter(dataOrder))
  }
}

export { classifyData };