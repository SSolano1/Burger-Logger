var express = require("express");
var router = express.Router();

var burgers = require('../models/burger.js');

router.get("/", function(req, res) {
    // console.log("hello");
    burgers.all(function(data) {
                var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    var condition = "id= " + req.body;
    console.log(Object.keys (req.body)['burgerId']);
//    "UPDATE tablname SET devoured=1 WHERE id=3"
    // burgers.update({
    //   devoured: 1
    // }, condition, function(result) {
    //   if (result.changedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
    //     res.status(200).end();
    //   }
    // });
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