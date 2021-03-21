import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	state = { lat: null, errMessage: null }

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			pos => this.setState({ lat: pos.coords.latitude }),
			err => this.setState({ errMessage: err.message })
		)
	}

	render() {
		const { lat, errMessage } = this.state;
		
		let display = 'Loading...';

		if (errMessage && !lat) {
			display = <div>Error: {errMessage} </div>
		}
		if (!errMessage && lat) {
			display = (<SeasonDisplay lat={lat} />)
		}

		return (
			display
		)
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));