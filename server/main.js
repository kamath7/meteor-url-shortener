import { Meteor } from "meteor/meteor";
import { Links } from "../imports/collections/links";
import { WebApp } from "meteor/webapp";
import ConnectRoute from "connect-route";

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish("links", function () {
    return Links.find({});
  });
});

//Exectued whenever an user visits with a route
function onRoute(req, res, next) {
  //take token out of url and try to find matching link in links collection
  const link = Links.findOne({ token: req.params.token });

  if (link) {
    //if found, redirect user to long url
    Links.update(link, { $inc: { clicks: 1 } });
    res.writeHead(307, { Location: link.url }); //Redirect
    res.end();
  } else {
    //if not send user to normal react app
    next();
  }
}

const middleware = ConnectRoute(function (router) {
  router.get("/:token", onRoute);
});
//Adding Middleware
WebApp.connectHandlers.use(middleware); //use is used to add a middleware
//connect routes - parse url
