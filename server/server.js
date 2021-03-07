const express = require("express");
const app = express();
// const morgan = require("morgan");
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const connectDB = require("./config/db");

//connect to DB
connectDB();

//middleware

app.use(express.json());
app.use(cors());
// app.use(morgan("dev"));

//importing and setting routes middleware

const todoRoutes = require('./Routes/todos');
app.use('/todo-list',todoRoutes);


app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
