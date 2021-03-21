import React from 'react';
import getSeason from './getSeason'

const SeasonDisplay = props => {
  const { lat } = props;
  const month = new Date().getMonth;
  const season = getSeason(lat, month)
  return (
    <div><div>Season: {season} </div></div>
  )
}

export default SeasonDisplay;