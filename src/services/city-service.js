const {CityRepository} = require('../repository/index');

class CityService {

    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async deleteCity(CityId){
        try {
            const city = await this.cityRepository.deleteCity(CityId);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async getAllCities(filter){
        try{
            const cities = await this.cityRepository.getAllCity({name:filter.name});
            return cities;
        }
        catch(error){
            console.log("Something went wrong in city-service layer");
            throw{error};
        }
    }

    
}

module.exports = CityService;