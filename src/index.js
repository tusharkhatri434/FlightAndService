const express = require("express");
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () =>{

    // create the express server object 
    const app = express();
    app.listen(PORT, ()=>{
        console.log(`server starting at ${PORT}`);
    })
}

setupAndStartServer();