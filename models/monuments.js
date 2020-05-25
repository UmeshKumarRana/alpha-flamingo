var mongoose = require("mongoose");

//SCHEMA SETUP
var monumentSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc1: String,
    desc2: String,
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ]
});

module.exports = mongoose.model("Monument", monumentSchema);
