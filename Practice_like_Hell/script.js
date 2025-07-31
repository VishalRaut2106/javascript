var btn = document.querySelector("button");
var p = document.querySelector("p");
btn.addEventListener("click", function () {
  p.textContent = "hey paragraph changed";
});

// task 2
var image1 = document.querySelector("#img1");
var image2 = document.querySelector("#img2");

var btn2 = document.querySelector("#button2");
btn2.addEventListener("mouseover", function () {
  var src1 = image1.src;
  var src2 = image2.src;

  image1.src = src2;
  image2.src = src1;
});

// task3
var input1 = document.querySelector("#inp1");
var input2 = document.querySelector("#inp2");
var h4 = document.querySelector("h4");

var form = document.querySelector("form");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  if (input1.value.trim() === "" || input2.value.trim() === "") {
    h4.textContent = "Some Fields are Empty";
    h4.style.color = "red";
  } else {
    h4.textContent = "";
  }
});

// task 4

var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var input = document.querySelector("#input");

var ul = document.querySelector("#ul");
add.addEventListener("click", function () {
  if (input.value.trim() === "") {
  } else {
    var li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});
remove.addEventListener("click", function () {
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
});

// task 5
var h3 = document.querySelector("#h3");
var startbutton = document.querySelector("#start");
var stopbutton = document.querySelector("#stop");
var resetbutton = document.querySelector("#reset");

var count = 0;
var intervalId = null;

startbutton.addEventListener("click", function () {
  if (intervalId !== null) return; // if already running, do nothing

  intervalId = setInterval(function () {
    h3.textContent = count++;
  }, 1000);
});

stopbutton.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});

resetbutton.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  count = 0;
  h3.textContent = count;
});

var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext = document.querySelector(".hometext");
var abouttext = document.querySelector(".abouttext");
var contacttext = document.querySelector(".contacttext");

// Hide all initially
texthatao();
hometext.style.display = "block"; // Show home by default

function texthatao() {
  document.querySelectorAll(".tabcontent").forEach(function (h3) {
    h3.style.display = "none";
  });
}

home.addEventListener("click", function () {
  texthatao();
  hometext.style.display = "block";
  hometext.style.width = "50%";
});

about.addEventListener("click", function () {
  texthatao();
  abouttext.style.display = "block";
  abouttext.style.width = "50%";
});

contact.addEventListener("click", function () {
  texthatao();
  contacttext.style.display = "block";
  contacttext.style.width = "50%";
});
