const {Airplane} = require("../models/index");

class AirplaneRepository {

  async getAirplane(id) {
    try {
      const response = await Airplane.findByPk(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;