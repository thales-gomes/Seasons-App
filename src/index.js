import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(pos) => console.log(pos),
			(err) => console.log(err)
		);
		return <div>Latitude: </div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));