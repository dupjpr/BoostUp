import { useDispatch, useSelector } from "react-redux";
import { filterData } from './actionFilter';

import './filter.scss';

const Filter = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const statesKeys = Object.keys(storeData.statesEEUU);

  let labelState = []

  statesKeys.forEach(element => {
    labelState = [...labelState, { stateName: storeData.statesEEUU[element], stateInitials: element }]
  });

  const handleChange = (e, selected) => {

    filterDataFunction(e.target.value, selected)
  }

  const filterState = (value) => {
    return storeData?.dataClassify.filter((item) => item[0].state === value)
  }

  const filterDataFunction = (e, selected) => {

    if (selected === 'state') {
      if (e !== "All states") {
        const newData = filterState(e)
        dispatch(filterData(newData, e, true));
      } 
      else {
        dispatch(filterData(storeData?.dataClassify, ''));
      }
    }

    if (selected === 'time') {
      if (e === "Last 7 days") {

        if (storeData.pickState) {
          const stateUSA = filterState(storeData.pickState);
          const newData = stateUSA[0].filter((item, idex) => idex <= 6);
          dispatch(filterData(newData, storeData.pickState, true));
        } 
      }
      if (e === "Last 1 month") {
        if (storeData.pickState) {
          const stateUSA = filterState(storeData.pickState);
          const newData = stateUSA[0].filter((item, idex) => idex <= 29);
          dispatch(filterData(newData, storeData.pickState, true));
        } 
      }
      if (e === "All Time") {
        if (storeData.pickState) {
          const stateUSA = filterState(storeData.pickState);
          dispatch(filterData(stateUSA, storeData.pickState, true));
        } else {
          dispatch(filterData(storeData.dataClassify, storeData.pickState));
        }

      }
    }

  }

  return (
    <div className='container-inputs'>
      <select value={storeData.pickState} onChange={(e) => handleChange(e, 'state')}>
        <option defaultValue key='All states' value="All states">All States</option>
        {labelState.map((item) => (
          <option key={item.stateInitials} value={item.stateInitials}>{item.stateName}</option>
        ))}
      </select>
      {storeData.activeInput && <select  onChange={(e) => handleChange(e, 'time')}>
        <option defaultValue value="All Time">All time</option>
        <option value="Last 7 days">Last 7 days</option>
        <option value="Last 1 month">Last 1 month</option>
      </select>}
    </div>
  );
}

export default Filter;
