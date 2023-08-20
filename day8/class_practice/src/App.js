import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  state = { latitude: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ latitude: position.coords.latitude });
    });
  }
  render() {
    return (
      <div>
        <HemisphereDisplay latitude={this.state.latitude} />
      </div>
    );
  }
}

export default App;
