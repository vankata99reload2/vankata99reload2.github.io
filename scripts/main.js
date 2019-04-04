
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = document.getElementById("city").value;

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;

	// get current weather
	fetch(request)

	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);
	})

	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;

  var weatherIcon = document.getElementById('icon').src = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';



}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?';
}

// init data stream
document.getElementById("getWeather").onclick = function(){
	getAPIdata();
};

function getDoggo() {
	var url = 'https://random.dog/woof.json';

	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(response){
		document.getElementById('dogPicture').src = response.url;
	})
}



function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];
        document.getElementById('position')
        // See leaflet docs for setting up icons and map layers
        // The update to the map is done here:
        iss.setLatLng([lat, lon]);
        isscirc.setLatLng([lat, lon]);
        map.panTo([lat, lon], animate=true);
    });
    setTimeout(moveISS, 5000);
}


$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#spacepeeps').html(number);

    data['people'].forEach(function (d) {
         $('#astronames').append('<li>' + d['name'] + '</li>');
    });
});


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

/*

var url2 = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

$.ajax({
  url: url2,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }

  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none");
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none");
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url2);
  $("#returnObject").text(JSON.stringify(result, null, 4));
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});




function onAPISucces(response){

	document.getElementsByTagName('h1')[0].innerHTML = 'Search results for "'+q+'"';

	resultBox = document.getElementById('results');

	for(var i=0; i<response.artObjects.length; i++){
		console.log(response.artObjects[i]);
		resultBox.innerHTML += '<figure>'
							 + '<img src="'+response.artObjects[i].webImage.url+'" />'
							 + '<figcaption>'+response.artObjects[i].longTitle+'</figcaption>'
							 + '</figure>';
	}
}




var today = new Date();
var h;
var m;
var s;


function startTime() {
  //offset = 8;
  var today = new Date();
   h = today.getHours();
   m = today.getMinutes();
   s = today.getSeconds();

  if (h > 24) {
    h = h - 24;
  }
  if (h < 0) {
    h = h + 24;
  }




  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;


  var t = setTimeout(function() {
    startTime()
  }, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}


startTime()







/*
  //var object{}

    var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    console.log(beasts.indexOf('giraffe'));
    function (){

    }

  var  para;
  env, supplies, metrics
*/

  /*

  var today = new Date();
  var speedInitial = 1000;
  var speed = ParseInt(document.getElementById('speedVar'));
  speed.addEventListener('keydown', logKey);

  function logKey(speed){
    speed+=100;
  }

  speed.onkeypress = function(){
    speed+=100;
  }
  */
  /*
  var g;
  var countdownHandle;

  var start = document.getElementById("start");
  start.addEventListener("click", function(){
  alert("sup");})


  function updateCountdown(){
  		document.getElementById('gravityConvert').innerHTML = g + 'G mars gravity';

  }

  document.getElementById('start').onclick = function () {
  	g = parseInt(document.getElementById('gravityConvertStart').value)/3.75;
  };



  document.getElementById('marsbar').onclick = function(){
  var select = document.getElementById('select').selectedIndex;
  console.log(select);

  function uniKeyCode() {
  var key = event.&#8593;
  document.getElementById("demo2").innerHTML = "Unicode KEY code: " + key;
}

function uniKeyCode();


  document.getElementById('start').onclick = function(){
  var select = document.getElementById('select').selectedIndex;
  console.log(select);

function itemKeypress(event){
  if (event.which === 38) {
    alert("bitch");
  }
}


    var data{

    }




    	var checkbox = document.getElementById('checkbox').checked;
    	console.log(checkbox);
    };


//Gravity and Miles Measurement

    var drinks=5;
    var foods=5;
    document.getElementById('startGravity').onclick = function () {
        var gravity = (document.getElementById("gravityConvertStart").value)/3.50;
      document.getElementById('gravityConvert').innerHTML = gravity + 'G is the gravity on Mars';
    }


      document.getElementById('startMiles').onclick = function () {
          var miles = (document.getElementById("milesConvertStart").value)*1.60;
        document.getElementById('milesConvert').innerHTML = miles + 'Miles on Mars';
      }


//Speed Meter

      document.getElementById('speed-icon').onmousedown = function(){

      var newSpeed = ParseInt(document.getElementById("speed").value);
      newSpeed=+100;
        document.getElementById('speedVar').innerHTML = newSpeed;
      }



//Food and Drink Input and Meter


  document.getElementById('eatBars').onclick = function() {

    foods = foods - 1;

    if (foods==0){
      document.getElementById('food-value').innerHTML = 'Out of Mars bars!';
    } else {
      document.getElementById('food-value').innerHTML = foods + ' bars left';
    }
  }


  document.getElementById('drinkWater').onclick = function() {

    drinks = drinks - 1;

    if (drinks ==0){
      document.getElementById('water-value').innerHTML = 'Out of water drops!';
    } else {
      document.getElementById('water-value').innerHTML = drinks + ' drops left';
    }
}
*/
