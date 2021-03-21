import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lat: 'loading', errMessage: null }
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			pos => { this.setState({ lat: pos.coords.latitude }) },
			err => { this.setState({ errMessage: err.message }) }
		)
	}

	render() {
		const { lat, errMessage } = this.state;
		
		const display =	(!errMessage)?
			(<div>Latitude: {lat} </div>) :
			(<div>Error: {errMessage} </div>)

		return (
			display
		)
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));