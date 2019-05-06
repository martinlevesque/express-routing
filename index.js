
const helpers = require("./lib")
const express = require("express");

function expressRouting(app, routeConfigs, currentContext = "/") {
  const router = express.Router();

  for (const routeConfig of Object.keys(routeConfigs)) {
    const decodedRoute = helpers.decodeRoute(routeConfig);

    if (decodedRoute) {
      helpers.addDecodedRoute(router, decodedRoute, routeConfigs[routeConfig]);
    } else {
      expressRouting(router, routeConfigs[routeConfig], `/${routeConfig}/`);
    }
  }

  app.use(currentContext, router)
}

module.exports = expressRouting
