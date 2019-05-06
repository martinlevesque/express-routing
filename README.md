# express-routing
[![NPM](https://nodei.co/npm/express-routing.png)](https://nodei.co/npm/express-routing/)

[![Build status](https://travis-ci.org/martinlevesque/express-routing.svg?branch=master)](https://travis-ci.org/martinlevesque/express-routing)

This package allows to generate express routers with a convenient routing file defining all routes.

## Installation

```
npm install express-routing
```

## Usage Example

```
const expressRouting = require("express-routing");
const express = require("express");

// <your> express application:
const app = express();

function inlineRoute(req, res) {
  res.json({});
}

const routes = {
  '* /': require('./testRoutes').allMethods,   // all HTTP methods resquested to /
  'get *': require('./testRoutes').allGet,     // get requests to all paths
  'get /inline': inlineRoute,                  
  'get /login': require('./testRoutes').login,
  categories: {                                 // defines a context "/categories/"
    'get *': require('./categories/index').all, // all get requests to /categories/
    'get /what': require('./categories/index').what,
    "insubcat": {                               // /categories/insubcat
      "get /whatsub": require('./categories/insubcat/index').whatsub
    }
  }
};

expressRouting(app, routes);
```

## API

```
expressRouting(appOrRouter, routes)
```

*appOrRouter* can be either an express application or an express router.
*routes* are the routes definitions, an hash object (see the example).


## License

ISC
