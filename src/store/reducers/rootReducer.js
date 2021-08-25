import store from "../store"

const rootReducer = (state, action) => {

  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      }
    case 'GET_PROFILE':
      return {
        ...state,
        data: action.payload
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'CLASSIFY':
      return {
        ...state,
        dataClassify: action.payload
      }
    case 'STATUS':
      return {
        ...state,
        statusClassify: action.payload
      }
    case 'FILTER':
      return {
        ...state,
        dataChart: action.payload
      }
    case 'PICK':
      return {
        ...state,
        pickState: action.payload
      }
    case 'LABEL-X':
      return {
        ...state,
        chartConfig: { ...state.chartConfig, labelStates: action.payload }
      }
    case 'DATA-CHART':
      return {
        ...state,
        chartConfig: { ...state.chartConfig, dataStates: action.payload }
      }
    default:
      return state
  }
}

export default rootReducer;
