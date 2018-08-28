var express = require("express");
var router = express.Router();

var burgers = require('../models/burger.js');

router.get("/", function(req, res) {
    // console.log("hello");
    burgers.selectAll(function(data) {
                var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burgers.insertOne (["burger_name", "devoured"], [req.body.name, false], function(result) {
        res.json ({id: result.insertId}
        );
    });
});

router.put("/api/burgers/updateOne/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

burgers.updateOne ({
    devoured: req.body.devoured
}, 
    condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status (200).end();
        }
    });    
});

router.delete ("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

burgers.delete (condition, function(result) {
    if (result.affectedRows == 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
});    
});

module.exports = router;