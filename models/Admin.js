const mongoose = require("mongoose");
const Schema = mongoose.Schema


const adminSchema = new Schema({
    AdminID: {
        type: String,
        unique: true,
    },
    UserName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    FullName: {
        type: String,
        required: true,
      },
    Email: {
        type: String,
        required: true,
      },
    ContactNumber: {
        type: String,
        required: true,
    },
    Occupation: {
        type: String,
        required: true,
    },
    Designation: {
        type: String,
        required: true,
    },

},{timestamps:true});

adminSchema.pre("save", function (next) {
  const currentYear = new Date().getFullYear().toString();
  const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
  const generatedID = currentYear + randomDigits;
  this.AdminID = 'A-' + generatedID;
  next();
});

module.exports = mongoose.model("Admin", adminSchema);