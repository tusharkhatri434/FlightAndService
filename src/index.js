const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/serverConfig');

const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () =>{
  // create the express server object
  const app = express();

   app.use(bodyParser.json()); // --> middlewares runs in every function without call
   app.use(bodyParser.urlencoded({ extended: true })); // --> middlewares runs every time in function without call

  app.listen(PORT, () => {
    const obj = new CityRepository();

    // obj.createCity({name:"New delhi"}); // --> to add city in DB
    // obj.deleteCity(1);  // ---> to delete data of city from DB
    console.log(`server starting at ${PORT}`);
  });
}

setupAndStartServer();