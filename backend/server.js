const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

mongoose.connect("mongdodb://127.0.0.1:27012/todoapp")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error: ", err));

const app = express();

app.use(cors());
app.use(express.json());

app, use("/api/todos", todoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});