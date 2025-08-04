/* eslint-disable no-console */

import {Server} from "http";
// import express, { Request, Response } from "express"
import mongoose from "mongoose"
import app from "./app";
import { envVars } from "./app/config/env";

let server:Server;

const startServer= async() =>{
    try{
       
        await mongoose.connect(envVars.DB_URL)


console.log("connected to DB!!");
 server=app.listen(envVars.PORT,()=>{
    console.log(`server is listening to port ${envVars.PORT}`)
});
    }catch(error){
       console.log(error); 
    }
}

startServer()

process.on("unhandledRejection",(err)=>{
    console.log("Unhandled Rejection detected...server shutting down..",err)
    if(server){
        server.close(()=>{
      process.exit(1)
        });
       
    }

    process.exit(1)
})
process.on("uncaughtException",(err)=>{
    console.log("Uncaught exception detected...server shutting down..",err)
    if(server){
        server.close(()=>{
      process.exit(1)
        });
       
    }

    process.exit(1)
})


process.on("SIGTERM",()=>{
    console.log("SIGTERM signal recieved...server shutting down..")
    if(server){
        server.close(()=>{
      process.exit(1)
        });
       
    }

    process.exit(1)
})

process.on("SIGINT",()=>{
    console.log("SIGINT signal recieved...server shutting down..")
    if(server){
        server.close(()=>{
      process.exit(1)
        });
       
    }

    process.exit(1)
})
//uncaught exception error
//throw new Error ("i forget to handle this local error")
