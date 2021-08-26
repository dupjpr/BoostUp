const actions = {
  filter: (data) => ({
    type: 'FILTER',
    payload: data
  }),
  pick: (data) => ({
    type: 'PICK',
    payload: data
  }),
  active: (data) => ({
    type: 'ACTIVE-OPTION',
    payload: data
  })
}

const { filter, pick, active } = actions;

const filterData = (newData, e, boolean) => {
  return dispatch => {
    dispatch(filter(newData))
    dispatch(pick(e))
    dispatch(active(boolean))
  }
}

export { filterData };