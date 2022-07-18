const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");

// Routes
const usersRoutes = require("./users/users.routes").router


// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));


// Endpoints
app.use('/api/v1/users', usersRoutes)
// app.use('/api/v1/auth');
// app.use('/api/v1/operations');


app.listen(config.port,()=>{
  console.log(`Server running on port: ${config.port}`)
})

