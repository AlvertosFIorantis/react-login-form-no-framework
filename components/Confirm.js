import React, { Component } from "react";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <React.Fragment>
        <div className="my-container_confirm">
          <h1>Please confirm your details</h1>
          <ul className="list">
            <li>First Name:</li>
            <li>{firstName} </li>
            <li>Last Name: {lastName}</li>
            <li>{lastName}</li>
            <li>email:</li>
            <li>{email}</li>
            <li>occupation:</li>
            <li>{occupation}</li>
            <li>city:</li>
            <li>{city}</li>
            <li>bio:</li>
            <li>{bio}</li>
          </ul>
          <div class="input-group">
            <button onClick={this.back}>Previous</button>
            <button onClick={this.continue}>Continue</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;
