const express = require("express");

const setupAndStartServer = async () =>{

    // create the express server object 
    const app = express();
    const PORT = 3000;
    app.listen(PORT, ()=>{
        console.log(`server starting at ${PORT}`);
    })
}

setupAndStartServer();