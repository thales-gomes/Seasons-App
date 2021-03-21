import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	state = { lat: 'loading', errMessage: null }

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			pos => this.setState({ lat: pos.coords.latitude }),
			err => this.setState({ errMessage: err.message })
		)
	}

	render() {
		const { lat, errMessage } = this.state;
		
		const display = (!errMessage) ?
			(<SeasonDisplay lat={lat} />) :
			(<div>Error: {errMessage} </div>)

		return (
			display
		)
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));