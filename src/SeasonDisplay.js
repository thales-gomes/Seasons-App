import React from "react";
import getSeason from "./getSeason";
import seasonConfig from "./seasonConfig";
import './SeasonDisplay.css'

const month = new Date().getMonth;

const SeasonDisplay = (props) => {
	const { lat } = props;
  const season = getSeason(lat, month);
  const seasonInfo = seasonConfig[season];
  const { text, iconName } = seasonInfo;

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon icon-left massive loading ${iconName}`}></i>
			<h1>{text}</h1>
			<i className={`icon icon-rigth massive loading ${iconName}`}></i>
		</div>
	);
};

export default SeasonDisplay;
