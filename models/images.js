var mongoose = require("mongoose");

//SCHEMA SETUP
var imageSchema = new mongoose.Schema({
    img: String
});

// var Image = mongoose.model("Image", imageSchema);

module.exports = mongoose.model("Image", imageSchema);