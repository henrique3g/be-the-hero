const express = require("express");

const OngsController = require("./controllers/OngsController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");

const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.store);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
