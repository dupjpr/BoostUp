import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getDataAction } from './actionsFetch';
import { classifyData } from './actionClassify';
import Chart from "../Chart/Chart";
import Filter from "../Filter/Filter";

const Home = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const statesKeys = Object.keys(storeData.statesEEUU);

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    if (storeData.data) {
      let dataOrder = [];
      statesKeys.forEach(element => {
        const stateFilter = storeData.data.filter((item) => item.state === element)
        dataOrder = [...dataOrder, stateFilter]
      })
      dispatch(classifyData(dataOrder));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeData.data]);

  return (
    <div>
      <h1>COVID</h1>
      <Filter />
      <Chart/>

    </div>
  );
}

export default Home;