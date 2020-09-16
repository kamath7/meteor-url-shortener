import { Mongo } from "meteor/mongo";
import validUrl from "valid-url";
import { check, Match } from "meteor/check";

Meteor.methods({
  "links.insert": function (url) {
    // validUrl.isUri(url); - checking if valid URI
    //check to run validation. if validation passed, nothing is done. If validation failed, error communicated to client
    check(
      url,
      Match.Where((url) => validUrl.isUri(url))
    ); //Match.where to define custom validation

    //if above check passes, we go down here. if not, it throws an error message
    const token = Math.random().toString().slice(-5);
    Links.insert({ url, token, clicks: 0 });
  },
});

export const Links = new Mongo.Collection("links");
