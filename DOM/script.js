// Selects the element with the id "abcd"
document.querySelector("#abcd");

// Selects the first element with the class "xyz"
document.querySelector(".xyz");

// Selects the first <h1> element in the document
var h1 = document.querySelector("h1");
h1.style.fontFamily = "Gilroy";
h1.style.fontSize = "160px";

// Add and remove class
h1.classList.add("changecolor");
h1.classList.remove("changecolor");

var img = document.createElement("img");

img.src =
  "https://images.unsplash.com/photo-1752508653441-fbaf5f5ac8b0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0";

// Optional: Add styling to the image
img.style.width = "300px";
img.style.borderRadius = "20px";

// Append the image to the body
document.body.appendChild(img);
document.body.removeChild(img);

var btn = document.querySelector("button");
btn.addEventListener('mouseover', function(){
    btn.textContent = "Starting..."
    btn.style.backgroundColor = "red"
})
btn.addEventListener('mouseleave', function(){
    btn.textContent = "Done"
    btn.style.backgroundColor = "green"
})

document.querySelector("body")
.addEventListener("mouseover" , function(dets){
  console.log("X: ",dets.clientX ,"Y: ",dets.clientY);
  
})