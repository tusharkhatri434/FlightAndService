const {CityRepository} = require('../repository/index');

class CityService {

    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async deleteCity(CityId){
        try {
            const city = this.CityRepository.deleteCity(CityId);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = this.CityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async getCity(cityId){
        try {
            const city = this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    
}

module.exports = CityService;