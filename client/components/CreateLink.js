import React, { Component } from "react";

class CreateLink extends Component {
  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('links.insert',this.refs.input.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Link to shorten</label>
            <input ref="input" className="form-control" />
          </div>
          <button className="btn btn-primary">Shorten</button>
        </form>
      </div>
    );
  }
}

export default CreateLink;
