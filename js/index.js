$(document).ready(function(){
 //get GeoLocation Data
  var lon;
  var lat; 
  var temp;
  
 $.getJSON("http://ip-api.com/json", function(data2){
           lat = data2.lat;
           lon = data2.lon;

//Create a URL for the api using the GeoLocation data
  var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f42f0a6dd3ff2b1b9e8d3e1e434b8ad1";
 
//Call OpenWeatherMap API to    
  $.getJSON(api, function(data){
    var city = data.name;
    var temp = (data.main.temp);
    var tempF = Math.round(temp * 9/5 - 459.67);
    var tempC = Math.round(temp - 273.15);
    var listF = tempF + " &#8457";
    var listC = tempC + " &#8451";
    var country = data.sys.country;
    var main = data.weather[0].main;
    var code = data.weather[0].id;
    var desc = data.weather[0].description;
    var toggle = true;
    
    $("#locData").html(city + ", " + country);
    $("#temp").html(listF);
     $("#unit").on("click", function(){      if (toggle === false){
         $("#temp").html(listC);
         toggle = true;
       }
       else {
         $("#temp").html(listF);
         toggle = false;
       }
       
     });
    $("#main").html(main);
    $("#icon").addClass("wi wi-owm-" + code);
    //use the new data to modify the HTML on the page
    });
  });
 });