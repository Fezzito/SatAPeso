const nextRoutes = require("next-routes");

const routes = nextRoutes();
routes.add("index", "/", "index");

module.exports = routes;
