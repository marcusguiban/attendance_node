require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
// files
const adminRoutes = require("./routes/Admin");

const connection = require("./database");


// database
connection();

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// routes

app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () =>{
    console.log(`Express JS started in port ${PORT}...`);
});
