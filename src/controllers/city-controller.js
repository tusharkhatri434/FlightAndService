const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            err:error
        })
    }
}

// Delete --> /city/:id
const destroy = async (req,res)=>{
    try {
        const response = await CityService.deleteCity(req.params.id);
        return res.status(201).json({
          data: response,
          success: true,
          message: "Successfully deleted a city",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete a city',
            err:error
        })
    }
}

// patch---> /city/:id 
const update = async (req,res)=>{
    try {
        const response = await CityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
          data: response,
          success: true,
          message: "Successfully updated a city",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update a city',
            err:error
        })
    }
}

// get .-> /city/:id
const get = async (req,res)=>{
    try {
        const response = await CityService.getCity(req.params.id);
        return res.status(201).json({
          data: response,
          success: true,
          message: "Successfully get a city",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get a city',
            err:error
        })
    }
}

module.exports = {
    create, // CREATE
    get,    // Read
    update, // UPDATE
    destroy // DELETE
}