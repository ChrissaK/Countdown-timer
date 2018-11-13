// Set the date we're counting down to
var countDownDate = new Date("Nov 13, 2018 17:19:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s  ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "00d : 00h : 00m : 00s";
    document.getElementById("bigDay").innerHTML = "Happy Birthday, Le mou!!!!";
    document.getElementById("patience").innerHTML = "";
    document.getElementById("patience").style.border = "none";
    document.getElementById("katchi").pause();
    video = document.getElementById("bdayVideo");
    video.innerHTML = '<video id="myVideo" width="560" height="315" autoplay controls><source src="media/happy_bday.mp4">Video tag is not supported.</video>';
    // d.outerHTML = '<iframe width="560" height="315" frameborder="0" src="https://www.youtube.com/embed/RTVNvC_-Jkk?autoplay=1" allowfullscreen></iframe>';
    buttons = document.getElementById("buttons");
    buttons.innerHTML = '<button id="PresentBtn" class="myButton">Present</button><button id="SurpriseBtn" class="myButton">Surprise</button>';
    makeButtonsFunctional();
  }
}, 1000);

//*******************************************//
// Button function
function makeButtonsFunctional(){
  function openFireworks(){
    vid = document.getElementById("myVideo");
    console.log(vid);
    if (vid.play()){
      vid.pause();
    }
    window.open("/Fireworks-wang/index.html");
    //window.open("/Fireworks-master/index.html");
  };

  function openYouTubeVideo(){
    vid = document.getElementById("myVideo");
    console.log(vid);
    if (vid.play()){
      vid.pause();
    }
    window.open("https://www.youtube.com/embed/u7zgEXKHYvk");
  };
  var surprise_button = document.getElementById("SurpriseBtn");
  surprise_button.addEventListener("click",openFireworks, false);

  var present_button = document.getElementById("PresentBtn");
  present_button.addEventListener("click",openYouTubeVideo, false);
}
