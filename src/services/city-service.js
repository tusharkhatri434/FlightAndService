const {CityRepository} = require('../repository/index');

class CityService {

    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async deleteCity(CityId){
        try {
            const city = this.cityRepository.deleteCity(CityId);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    async getCity(cityId){
        try {
            const city = this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("somthing went wrong in city-service service layer");
            throw{error};
        }
    }

    
}

module.exports = CityService;