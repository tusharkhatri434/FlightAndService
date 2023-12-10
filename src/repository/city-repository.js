const {City} = require('../models/index');  // get modals autmoticaly by destructuring;

class CityRepository {

    async createCity ({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw{error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = City.update(data,{
                where : {
                    id:cityId
                }
            })
        } catch (error) {
            console.log("Soemthing went wrong in city-repository");
            throw { error };
        } 
    }

    async getCity(cityId){
        try {
            const city = City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Soemthing went wrong in city-repository");
            throw{error};
        }
    }
}

module.exports = CityRepository;