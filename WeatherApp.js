$( document ).ready(function(){
 
  var api;
 
});
  
 
  //location API
  $.getJSON('https://freegeoip.net/json/').done(function(location) {
  
    $('#currentCity').html(location.city);
    $('#currentState').html(location.region_name);
    $('#currentZip').html(location.zip_code);
    $('#currentCountry').html(location.country_name);
    $('#currentLat').html(location.latitude);
    $('#currentLong').html(location.longitude);
    
   //weather API
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + location.latitude + '&lon=' + location.longitude + '&units=imperial', function(data) {
      
      var api=data;
      
      $('#theTemp').html(data.main.temp.toFixed(0) + "°C");
      $('#theWeather').html(data.weather[0].main);
      
      //weather icons
      var myIcon = api.weather[0].icon;
			$("#weatherIcon").html("<img src=" + myIcon + ">");
      
      //cel to fah
      temp = data.main.temp.toFixed(0);
      tempF = (((9/5) * temp) + 32).toFixed(0);
      
      $('#convert').click(function() {
         if ($('#theTemp').text().indexOf('C') > -1) {
      $('#theTemp').text(tempF + '° F');
  } else {
      $('#theTemp').text(temp + '° C');
  }
         
 });     
 });
 });
    