import React from "react";
import ReactDOM from "react-dom";

import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import { Links } from "../imports/collections/links";
import LinkList from './components/LinkList';

const App = () => {
  return (
    <div>
      <Header />
      <CreateLink />
      <LinkList/>
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".render-target"));
});
