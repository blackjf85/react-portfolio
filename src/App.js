import React, { Component } from "react";

import "./App.css";
import ProjectList from "./components/ProjectList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`https://jfb-portfolio-api.herokuapp.com/projects`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({ data: response.data, isLoaded: true });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Jeremy Black | JavaScript Developer</h1>
        <div className="project-div">
          <ProjectList data={this.state.data} isLoaded={this.state.isLoaded} />
        </div>
      </div>
    );
  }
}

export default App;
