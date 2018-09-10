var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    // console.log("hello");
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

    burgers.all(function(burgerData) {
        res.render("index", {burger_data: burgerData}
        );
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function      (result) {
        console.log(result);
        res.redirect("/");
    })
});

router.put("/api/burgers/updateOne/:id", function (req, res) 
{burgers.updateOne (req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
});    
});

module.exports = router;
    