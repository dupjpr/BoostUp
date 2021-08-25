const actions = {
  setLabel: (data) => ({
    type: 'LABEL-X',
    payload: data
  }),
  setData: (data) => ({
    type: 'DATA-CHART',
    payload: data
  }),
  setDataDeath: (data) => ({
    type: 'DATA-CHART-DEATH',
    payload: data
  })
}

const { setLabel, setData, setDataDeath } = actions;

const setChart = (label, dataSet, death) => {
  return dispatch => {
    dispatch(setLabel(label));
    dispatch(setData(dataSet));
    dispatch(setDataDeath(death));
  }
}

export { setChart };