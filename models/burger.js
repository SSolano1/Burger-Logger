var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"],    [name, false],  cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", {
      devoured: true},
      condition, cb);
    }
  };

  
module.exports = burgers;