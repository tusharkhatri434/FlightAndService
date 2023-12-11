const express  = require("express");
const CityControllers = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city',CityControllers.create);
router.delete('/city',CityControllers.destroy);
router.get('/city',CityControllers.get);
router.patch('/city',CityControllers.update);

module.exports = router;