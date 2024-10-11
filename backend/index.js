import Express, { urlencoded } from "express";
import path from 'path';
import cors from "cors";
import DBConnection from "./db/dbConnection.js";
import getDataRoutes from "./routes/getDataRoutes.js";
import contactRoute from "./routes/coontact.route.js"; // fixed the typo in filename
import dotenv from 'dotenv';

import { dirname } from 'path';

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 7000;


const __dirname = path.resolve()

app.use(cors({
    origin: "https://portfolio-render-xs4w.onrender.com", // Replace '*' with your frontend URL in production
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // Allow credentials
  }));
DBConnection();
app.use(urlencoded({ extended: true }));
app.use(Express.json());
app.use("/api",getDataRoutes)

// Serve static files from the "dist" folder
app.use(Express.static(path.join(__dirname, "/frontend/dist")));




// Fallback route for SPA
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend","dist", "index.html"));
});
app.listen(PORT,()=>{
  console.log("app is running");
})


