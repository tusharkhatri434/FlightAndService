const {Flight} = require("../models/index");
const {Op} = require('sequelize');

class FlightRepository {
  
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if(data.minPrice && data.maxPrice) {
    //     Object.assign(filter, {
    //         [Op.and]: [
    //             { price: {[Op.lte]: data.maxPrice} },
    //             { price: {[Op.gte]: data.minPrice} }
    //         ]
    //     })
    // }
    let priceFilter = [];
    if (data.minPrice) {
      // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
    console.log(filter);
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Somthing went wrong in repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flights = await Flight.findAll({ where: filterObject });
      return flights;
    } catch (err) {
      console.log("Somthing went wrong in repository layer");
      throw { err };
    }
  }
}

module.exports = FlightRepository;