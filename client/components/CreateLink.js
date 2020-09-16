import React, { Component } from "react";

class CreateLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    Meteor.call("links.insert", this.refs.input.value, (error) => {
      if (error) {
        this.setState({ error: "Enter valid URL" });
      } else {
        this.setState({ error: "" });
        this.refs.input.value = "";
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Link to shorten</label>
            <input ref="input" className="form-control" />
          </div>
          <div className="text-danger">{this.state.error}</div>
          <button className="btn btn-primary">Shorten</button>
        </form>
      </div>
    );
  }
}

export default CreateLink;
