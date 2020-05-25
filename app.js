var express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose"),
    bodyParser = require("body-parser"),
    Image      = require("./models/images"),
    Monument   = require("./models/monuments");
    seedDB     = require("./seeds")

var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
seedDB();

//INDEX - HOME PAGE AND SHOW ALL THE MONUMENTS
app.get("/", function(req, res){
    //get all the monuments from DB
    Monument.find({}, function(err, allMonuments){
        if(err){
            console.log(err);
        } else {
            //then render the page
            res.render("landing", {monument: allMonuments});
        }
    })
});

//SHOW - SHOWS MORE INFO ABOUT ONE CAMPGROUND
app.get("/monuments/:id", function(req, res){
    //find the monument with provided id
    Monument.findById(req.params.id).populate("images").exec(function(err, foundMonumenta){
        if(err){
            console.log(err);
        } else {
            res.render("show", {monument: foundMonumenta});
        }
    });
     
 
});

//NEW - Form for adding new image
app.get("/monuments/:id/images/new", function(req, res){
    Monument.findById(req.params.id, function(err, foundMonument){
        if(err){
            console.log(err);
        } else {
            res.render("new", {monument: foundMonument});
        }
    });
});

//CREATE - Creating new image and redirecting to home page
app.post("/monuments/:id", function(req, res){
    var newImage = req.body.img;
    Monument.findById(req.params.id, function(err, monuma){
        if(err){
            console.log(err);
        } else {
            Image.create({img: newImage}, function(err, image){
                if(err){
                    console.log(err);
                } else {
                    monuma.images.push(image);
                    monuma.save();
                    res.redirect("/monuments/" + req.params.id);
                }
            });
        }
    });
});


app.listen(process.env.PORT || 5000, function(){
    console.log("Congratulations, server has started...");
});