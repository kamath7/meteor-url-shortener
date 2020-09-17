import React, { Component } from "react";
import { Links } from "../../imports/collections/links";
import { withTracker } from "meteor/react-meteor-data";

import PropTypes from "prop-types";

class LinkList extends Component {
  renderRows() {
    return this.props.links.map((link,i) => {
      const { url, clicks, token } = link;
      const shortLink = `http://localhost:3000/${token}`;
      return (
        <tr key={i}>
          <td>{url}</td>
          <td>
            <a href={shortLink}>{shortLink}</a>
          </td>
          <td>{clicks}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Address</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("links");
  return { links: Links.find({}).fetch() };
})(LinkList);
