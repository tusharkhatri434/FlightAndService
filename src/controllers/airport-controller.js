const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const dataCreated = await airportService.createData(req.body);
        return res.status(201).json({
            data:dataCreated,
            success:true,
            message:"Successfully data created"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"data not created",
            err:error
        })
    }
}


const destroy = async (req,res)=>{
    try {
        const response = await airportService.deleteData(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully deleted"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"data not destroy",
            err:error
        })
    }
}

const update = async (req,res)=>{
    try {
        const response = await airportService.updateData(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully updated"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"data not updated",
            err:error
        })
    }
}

const get = async (req,res)=>{
    try {
        const response = await airportService.getData(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully get one"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"data not get",
            err:error
        })
    }
}
const getAll = async (req,res) =>{
    try {
        const response = await airportService.getAllData();
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully get all"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"data not get",
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}