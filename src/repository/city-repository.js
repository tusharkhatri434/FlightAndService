const {City} = require('../models/index');  // get modals autmoticaly by destructuring;

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // this syntax also  work but use for Postgrse Database
      // it is not return obj in MySQL
      // const city = City.update(data,{
      //     where : {
      //         id:cityId
      //     }
      // })

      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Soemthing went wrong in city-repository");
      throw { error };
    }
  }


  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllCity() {
    try {
      const city = await City.findAll();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }


}

module.exports = CityRepository;