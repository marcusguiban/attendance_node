const express = require("express");
const router = express.Router();
const AdminMongoDBController = require("../controllers/AdminController");



//get request or read

router.get("/", AdminMongoDBController.getAllAdmin );

// Get request parametarized

router.get("/:id", AdminMongoDBController.getAdmin);

// Post Request

router.post("/", AdminMongoDBController.createAdmin);

//update


router.put("/",  AdminMongoDBController.updateAdmin);

// delete

router.delete("/",AdminMongoDBController.deleteAdmin);

module.exports = router;