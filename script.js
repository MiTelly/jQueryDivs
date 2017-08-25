$(document).ready(function(){

    var newDivs = [];

    for(var i = 1; i < 11; i++) {
      newDivs.push($('<div />', { "class": "box", "text": i }));
    }

    $("div.container").append(newDivs);

    $("div.box").on("click", function() {
      $(this).css("background-color", "red");
      $(this).width("500px");
      $(this).height("150px");
    })
});
