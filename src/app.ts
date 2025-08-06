// import {Server} from "http";
import express, {  Request, Response } from "express"
// import { UserRoutes } from "./app/modules/user/user.route"
// import mongoose from "mongoose"
import cors from "cors"
import { router } from "./app/routes"
// import { envVars } from "./app/config/env"
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler"
import notFound from "./app/middlewares/notfound"

const app=express()

app.use(express.json())
app.use(cors())
app.use("/api/v1",router)


app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message:"Welcome to Tour Management System Backend"
    })
})

app.use(globalErrorHandler)
app.use(notFound)
   

export default app