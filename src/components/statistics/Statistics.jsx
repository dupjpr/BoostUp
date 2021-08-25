import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stat } from './actionStat';

import './stats.scss';

const Statistics = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {

    let totalPositiveUSA = 0;
    let totalDeathUSA = 0;

    storeData.dataClassify.forEach(element => {
      totalPositiveUSA += element[0].positive;
      totalDeathUSA += element[0].death;
    });

    dispatch(stat({ 
      PositiveUSA: new Intl.NumberFormat().format(totalPositiveUSA), 
      DeathUSA: new Intl.NumberFormat().format(totalDeathUSA) 
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeData.dataClassify]);

  return (
    <div className='container-stats'>
      <div>Total positive cases USA: {storeData.statUSA.positive}</div>
      <div>Total deaths USA: {storeData.statUSA.death}</div>
    </div>
  );
}

export default Statistics;