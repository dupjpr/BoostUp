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
    case 'ACTIVE-OPTION':
      return {
        ...state,
        activeInput: action.payload
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
    case 'DATA-CHART-DEATH':
      return {
        ...state,
        chartConfig: { ...state.chartConfig, dataDeath: action.payload }
      }
    case 'TOTAL-USA':
      return {
        ...state,
        statUSA: { ...state.statUSA, positive: action.payload.PositiveUSA,  death: action.payload.DeathUSA}
      }
    default:
      return state
  }
}

export default rootReducer;
