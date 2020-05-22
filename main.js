let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2.jfif') {
      myImage.setAttribute('src', 'images/大于1000.jpg');
    } else {
      myImage.setAttribute('src', 'images/2.jfif');
    }
}
let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setusername(){ 
	let Name = prompt('请输入你的名字：');
	if(Name===null || !Name){setusername();
	}
	else{
	localStorage.setItem('name',Name);
	myHeading.textContent = "你真帅"+Name;}
}
if(!localStorage.getItem('name')){setusername();
}
else{
	let storagename = localStorage.getItem('name');
	myHeading.textContent="你真帅"+storagename;
}
mybutton.onclick = function(){
setusername();}
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);
function toggleFullScreen(e) {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (e.keyCode ==27) {
      document.exitFullscreen(); 
    }
  }
};