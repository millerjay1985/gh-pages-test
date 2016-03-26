
$(document).ready(function() {
  //triggers ajax method once new quote button is pushed
  var item;
  var color;
  var quote = $(".quotes").html().replace(" ", "%20");
  var author;
  colorChange();
  $(".box-clr").css("background-color", "#fff");
  $("#tweet").prop("href", "https://twitter.com/share?text=" + quote);
  $('#getMessage').click(function(){ 
    color = colorChange();
    //this is the ajax method being called 
    ajax_test(function(array) {
      var div = $(".message");
      //first empty the div
      div.empty();
      item = array[Random(15)];
      quote = item.quote;
      author = item.author;        
      //appends data to the div with the message class
      console.log(color);
      div.append("<blockquote><span class='quotes'>"+ quote +"</span>"+ "<footer style='color:"+ color +"'>" + author + "</footer></blockquote>");
      quote = quote.replace(" ", "%20");
      $("#tweet").prop("href", "https://twitter.com/share?text=" + quote);
    });
  });
});

//this function returns an array from the callback function in the JSONP file
function ajax_test(callback){  
   $.ajax({
      //this is the url to my json.js file
      url: "http://millerjay1985.github.io/gh-pages-test/json_data.json.js",
      dataType: "jsonp",
      //this is the name of the function in my .json.js file
      jsonpCallback: "myFunction",
      success: function(data) {  
        callback(data);
     }
   });  
}  
var uniqueRandoms = [];
function Random(numRandoms) {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    // now remove that value from the array
    uniqueRandoms.splice(index, 1);
    return val;
}

var uniqueRandoms2 = [];
function Random2(numRandoms) {
    // refill the array if needed
    if (!uniqueRandoms2.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms2.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms2.length);
    var val = uniqueRandoms2[index];
    // now remove that value from the array
    uniqueRandoms2.splice(index, 1);
    return val;
}

var colors = ["#6600CC", "#9999FF", "#33CCFF", "#990066", "#FF6633"];

//generates random color from the colors array
function colorChange(){
  color = colors[Random2(5)];
  $(".body-clr").css("background-color", color);
  $(".txt-clr").css("color", color);
  $("footer").css("color", color);
  return color;
}

