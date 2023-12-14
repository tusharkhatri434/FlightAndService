const { AirportRepository } = require("../repository/index");
const crudService = require("./crud-service");

class AirportService extends crudService {
     constructor() {
        const airportRepositoryMethods = new AirportRepository();
        super(airportRepositoryMethods);

     }
}

module.exports = AirportService;
