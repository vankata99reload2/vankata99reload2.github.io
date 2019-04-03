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

  document.getElementById('planets').onmousedown = function () {
    document.getElementById('earth-title').innerHTML = 'Mars time:';
    m+=40;
  }

  if (h<=12) {
    document.body.style.backgroundImage = "url('./images/backgroundmorning.jpg')";
  } else if (h<=17) {
    document.body.style.backgroundImage = "url('./images/background.jpg')";

  } else if (h<24) {
    document.body.style.backgroundImage = "url('./images/backgroundnight.jpg')";
  }

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




// set timeline
var timeline = new TimelineMax({ repeat: -1, ease: Power0.easeNone });

// amimate timeline
timeline.to('.marsbar', 1, { opacity: 1})
		.from('.m1', 200, { backgroundPositionX: 2400}, 'marsbar')
		.from('.m2', 300, { backgroundPositionX: 1200}, 'marsbar');

//Change the colors for the themes from button

  var textColor = 0;

document.getElementById('themes').onclick = function changeTheme(){

  if (textColor == 0) {
    document.body.style.color = "yellow";
    document.getElementById("header").style.color = "yellow";
    document.getElementById("themes").style.color = "yellow";
      document.getElementById("planets").style.color = "yellow";
    textColor+= 1;
  }
  else if (textColor == 1) {
    document.body.style.color = "red";
    document.getElementById("header").style.color = "red";
    document.getElementById("themes").style.color = "white";
    document.getElementById("planets").style.color = "white";

    textColor+= 1;
  }
  else{
    document.body.style.color = "blue";
    document.getElementById("header").style.color = "blue";
    document.getElementById("themes").style.color = "blue";
    document.getElementById("planets").style.color = "blue";

    textColor-=2;
  }
};

document.getElementById('planets').onclick = function changePlanet(){

};

TweenLite.to(clockCome, 2.5, {
  ease: Circ.easeOut,
  y: 500
});




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
