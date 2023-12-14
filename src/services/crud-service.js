class crudService {
     
    constructor (repository){
        this.repository = repository;
    }
    
    async createData(data){
       try {
         const response = await this.repository.create(data);
         return response; 
       } catch (error) {
         console.log("something went wrong in service layer");
         throw{error};
       }
    }

    async deleteData(data){
       try {
         const response = await this.repository.destroy(data.id);
         return response; 
       } catch (error) {
         console.log("something went wrong in service layer");
         throw{error};
       }
    }

    async updateData(data){
       try {
         const response = await this.repository.update(data.id,data);
         return response; 
       } catch (error) {
         console.log("something went wrong in service layer");
         throw{error};
       }
    }

    async getData(data){
       try {
         const response = await this.repository.get(data.id);
         return response; 
       } catch (error) {
         console.log("something went wrong in service layer");
         throw{error};
       }
    }

    async getAllData(){
       try {
         const response = await this.repository.getAll();
         return response; 
       } catch (error) {
         console.log("something went wrong in service layer");
         throw{error};
       }
    }
}

module.exports = crudService;