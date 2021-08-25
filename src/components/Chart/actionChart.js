const actions = {
  setLabel: (data) => ({
    type: 'LABEL-X',
    payload: data
  }),
  setData: (data) => ({
    type: 'DATA-CHART',
    payload: data
  })
}

const { setLabel, setData } = actions;

const setChart = (label, dataSet) => {
  return dispatch => {
    dispatch(setLabel(label));
    dispatch(setData(dataSet));
  }
}

export { setChart };