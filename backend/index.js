import Express, { urlencoded } from "express"
import cors from "cors"
import DBConnection from "./db/dbConnection.js";
import router from "./routes/getDataRoutes.js";
import contactRoute from "./routes/coontact.route.js";
import dotenv from 'dotenv'
const app=Express()
dotenv.config()
app.use(cors())
DBConnection()
app.use(urlencoded({ extended: true }));
app.use(Express.json())
app.use('/api',router)
app.use('/api/contact', contactRoute);

app.listen(7000,()=>{
    console.log("app is running");
})