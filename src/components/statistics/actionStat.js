const actions = {
  totalUSA: (data) => ({
    type: 'TOTAL-USA',
    payload: data
  })
}

const { totalUSA } = actions;

const stat = (total) => {

  return dispatch => {
    dispatch(totalUSA(total));
    // dispatch(deathUSA(death));

  }
}

export { stat };