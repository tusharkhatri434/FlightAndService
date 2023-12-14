const {FlightService} = require("../services/index");

const flightService = new FlightService(); // class and objects always diffrent name

const create = async (req,res)=> {
     try {
        const response = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            error:{}
        })
     } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create",
            error:error
        })
     }
}

const getAll = async (req,res)=> {
     try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            error:{}
        })
     } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get",
            error:error
        })
     }
}


module.exports = {
    create,
    getAll
}