const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");
                                                    // console.log(date());

const app = express();

var items = [];
var workItems = [];
var today = "";

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));    //for posting data from wabe page
app.use(express.static("public"));                    //style sheet in public folder

app.get("/", function(req, res){
    
    const day = date.getDate();                           //for getting date from date.js file
    res.render("list", {listTitle: day, newListItems: items});
    
});

app.post("/", function(req, res){
                                                        // console.log(req.body);
    const item = req.body.newItem;
    
    if(today != date.getDate()){
        today = date.getDate();
        items = [];
        workItems = [];
     }
     
     if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{        
    items.push(item);
    res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(2000, function(){
    console.log("server started on port 2000");
})