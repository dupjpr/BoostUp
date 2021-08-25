const actions = {
  filter: (data) => ({
    type: 'FILTER',
    payload: data
  }),
  pick: (data) => ({
    type: 'PICK',
    payload: data
  })
}

const { filter, pick } = actions;

const filterData = (newData, e) => {
  return dispatch => {
    dispatch(filter(newData))
    dispatch(pick(e))
  }
}

export { filterData };