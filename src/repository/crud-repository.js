class CrudRepository {
    constructor(model){
        this.modelName = model; 
    }

    async create(data){
        try {
            const response = await this.modelName.create(data);
            return response;
        } catch (error) {
            console.log('Somthing went wrong in repository layer');
            throw{error};
        }
    }

    async destroy(id){
        try {
            await this.modelName.destroy({
                where:{
                    id:id
                }
            }); 
            return true;
        } catch (error) {
            console.log('Somthing went wrong in repository layer');
            throw{error};
        }
    }

    async update(id,newData){
        try {
            const response = await this.modelName.findByPk(id)
            response.name = newData.name;
            await response.save();
        } catch (error) {
            console.log('Somthing went wrong in repository layer');
            throw{error};
        }
    }

    async get(id){
        try {
            const response = await this.modelName.findByPk(id);
            return response                       
        } catch (error) {
            console.log('Somthing went wrong in repository layer');
            throw{error};
        }
    }

    async getAll(){
        try {
            const response = await this.modelName.findAll();
            return response;
        } catch (error) {
            console.log('Somthing went wrong in repository layer');
            throw{error};
        }
    }
}

module.exports = CrudRepository;