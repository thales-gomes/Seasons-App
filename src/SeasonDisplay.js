import React from 'react';

const SeasonDisplay = (props) => {
  const { lat } = props;
  return (
    <div><div>Latitude: {lat} </div></div>
  )
}

export default SeasonDisplay;