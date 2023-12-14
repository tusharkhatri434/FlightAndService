const express  = require("express");
const CityController = require('../../controllers/city-controller');
const FlightController = require("../../controllers/flight-controller");


const router = express.Router();
router.post("/city", CityController.create);
router.post("/flights",FlightController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

module.exports = router;