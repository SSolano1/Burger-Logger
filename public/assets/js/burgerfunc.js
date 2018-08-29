$(function() {
    $(".burgBtn").on("click", function(event) {
      var id = $(this).data("id");
      // var newState = $(this).data("newstate");
      console.log(id);

      var newBurgerState = {
        burgerId: id
      };
  
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurgerState
      }).then(
        function(res) {
          console.log (res);
          location.reload();
        }
      );
    });
  
    $(".create-update-form").on("click", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
      };
  
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // console.log("created new burger");
        location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
        $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          // console.log("deleted burger", id);
        location.reload();
        }
      );
    });
  });