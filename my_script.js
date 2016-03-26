
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

function Random(numRandoms) {
    // refill the array if needed
    var uniqueRandoms = [];
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

var colors = ["#6600CC", "#9999FF", "#33CCFF", "#990066", "#FF6633"];

//generates random color from the colors array
function colorChange(){
  color = colors[Random(5)];
  $(".body-clr").css("background-color", color);
  $(".txt-clr").css("color", color);
  $("footer").css("color", color);
  return color;
}
/*

var q1 = '<blockquote>"Victory goes to the player who makes the next-to-last mistake."<footer> Savielly Grigorievitch Tartakower </footer></blockquote>';
var q2 = '<blockquote>"If a man does his best, what else is there?"<footer>General George S. Patton</footer></blockquote>';
var q3 = '<blockquote>"You can avoid reality, but you cannot avoid the consequences of avoiding reality."<footer>Ayn Rand</footer></blockquote>';
var q4 = '<blockquote>"Sex and religion are closer to each other than either might prefer."<footer>Saint Thomas More</footer></blockquote>';
var q5 = '<blockquote>"Not everything that can be counted counts, and not everything that counts can be counted."<footer>Albert Einstein</footer></blockquote>';
var q6 = '<blockquote>"Women might be able to fake orgasms. But men can fake a whole relationship."<footer>Sharon Stone</footer></blockquote>';
var q7 = '<blockquote>"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."<footer>Albert Einstein</footer></blockquote>';
var q8 = '<blockquote>"Many wealthy people are little more than janitors of their possessions."<footer>Frank Lloyd Wright</footer></blockquote>';
var q9 = '<blockquote>"A lie gets halfway around the world before the truth has a chance to get its pants on."<footer>Sir Winston Churchill</footer></blockquote>';
var q10 = '<blockquote>"The difference between \'involvement\' and \'commitment\' is like an eggs-and-ham breakfast: the chicken was \'involved\' - the pig was \'committed\'."<footer>unknown</footer></blockquote>';
var q11 = '<blockquote>"You may not be interested in war, but war is interested in you."<footer>Leon Trotsky</footer></blockquote>';
var q12 = '<blockquote>"God is a comedian playing to an audience too afraid to laugh."<footer>Voltaire</footer></blockquote>';
var q13 = '<blockquote>"The artist is nothing without the gift, but the gift is nothing without work."<footer>Emile Zola</footer></blockquote>';
var q14 = '<blockquote>"I\'m living so far beyond my income that we may almost be said to be living apart."<footer>e e cummings</footer></blockquote>';
var q15 = '<blockquote>"In the End, we will remember not the words of our enemies, but the silence of our friends."<footer>Martin Luther King Jr.</footer></blockquote>';

var array = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15];

var x = array[Random()];

$(document).ready(function() {
    $("#getMessage").on("click", function(){
      // Only change code below this line.
     $(".message").html(array[Random()]); 
      // Only change code above this line.
    });
  $("#tweet").on("click", function(){
      // Only change code below this line.
     $(".message").html(array[Random()]); 
      // Only change code above this line.
    });
  });
*/
