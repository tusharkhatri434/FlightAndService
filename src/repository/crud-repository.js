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

    async update(itemId,newData){
        try {
             await this.model.update(newData, {
               where: {
                 id: itemId,
               },
             });
             return true;
        } catch (error) {
            console.log('Somthing went wrong in repository layer');
            throw{error};
        }
    }

    async get(id){
        try {
            const response = await this.modelName.findByPk(id);
            return response;                       
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