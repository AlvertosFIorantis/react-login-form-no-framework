import React, { Component } from "react";
import "./App.css";
import { UserForm } from "./components/UserForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <UserForm />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
