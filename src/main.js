import './style.css';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const banner = document.getElementById("banner");
const bannerimg = document.getElementById("bannerImage");
const colorPicker = document.getElementById("colorPicker");
const textColorPicker = document.getElementById("textColorPicker");
const textarea = document.getElementById("textInput");
const image = document.getElementById("img");
const normal = document.getElementById("normal-icon");
const bold = document.getElementById("bold-icon");
const italic = document.getElementById("italic-icon");
const modal = document.getElementById("myModal");
const s1 = document.getElementById("style1");
const s2 = document.getElementById("style2");
const s3 = document.getElementById("style3");
const s4 = document.getElementById("style4");
const s5 = document.getElementById("style5");
const fontfamily = document.getElementById("font-family");


let currentfontsize="24"; 
let currentfontstyle="normal";
let currentfontfamily="sans-serif";
let currentTextColor = "black"; 
textarea.value = "Travelling is fun!";

ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
ctx.fillStyle = currentTextColor;
ctx.fillText(textarea.value, 30, 30);

textarea.addEventListener("input", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillStyle = currentTextColor;
    ctx.fillText(textarea.value, 30, 30);
});

colorPicker.addEventListener("input", function () {
    banner.style.backgroundColor = this.value;
});

image.addEventListener('change', (event) => {
    const file = event.target.files[0];  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        bannerimg.src = e.target.result; 
    };
      reader.readAsDataURL(file);
    }
});

normal.addEventListener("click", () => {
    currentfontstyle = "normal";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30); 
});

bold.addEventListener("click", () => {
    currentfontstyle = "bold";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30); 
});

italic.addEventListener("click", () => {
    currentfontstyle = "italic";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30); 
});

fontfamily.addEventListener("click", () => {
    modal.style.display="block";
    window.onclick = function(event) {
      if (event.target == modal)
      {
        modal.style.display = "none";
      }
    }
});
  
s1.addEventListener("click", () => {
    currentfontfamily="Arial";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30);
}); 
  
s2.addEventListener("click", () => {
    currentfontfamily="cursive";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30);
});
  
s3.addEventListener("click", () => {
    currentfontfamily="Times New Roman";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30);
});
  
s4.addEventListener("click", () => {
    currentfontfamily="sans-serif";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30);
});

s5.addEventListener("click", () => {
    currentfontfamily="Verdana";
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    ctx.fillText(textarea.value, 30, 30);
});

textColorPicker.addEventListener("input", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${currentfontstyle} ${currentfontsize}px ${currentfontfamily}`;
    currentTextColor = this.value;
    ctx.fillStyle = currentTextColor; 
    ctx.fillText(textarea.value, 30, 30);
});


