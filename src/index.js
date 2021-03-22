import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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

		let display = <Spinner message="Please accept location request"/>;

		if (errMessage && !lat) {
			display = <div>Error: {errMessage} </div>
		}
		if (!errMessage && lat) {
			display = (<SeasonDisplay lat={lat} />)
		}
		return display
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));