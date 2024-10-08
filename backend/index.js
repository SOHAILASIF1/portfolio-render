import Express from "express"
import cors from "cors"
import DBConnection from "./db/dbConnection.js";
import router from "./routes/getDataRoutes.js";
const app=Express()
app.use(cors())
DBConnection()
app.use(Express.json())
app.use('/api',router)

app.listen(4000,()=>{
    console.log("app is running");
})