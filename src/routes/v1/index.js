const express  = require("express");
const CityController = require('../../controllers/city-controller');
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const { FlightMiddleware } = require("../../middlewares/index");

const router = express.Router();
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

// flight routes---
router.post("/flights", FlightMiddleware.validateCreateFlight, FlightController.create);
router.get("/flights", FlightController.getAll);
router.get("/flight/:id", FlightController.get);
router.patch("/flight/:id", FlightController.update);

// Airpor routes---
router.post("/airport", AirportController.create);
router.get("/airport", AirportController.get);
router.patch("/airport", AirportController.update);
router.delete("/airport",AirportController.destroy);

module.exports = router;