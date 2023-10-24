//your JS code here. If required.
const arr = document.getElementByClassName("btn");
for(let i = 0; i < arr.length; i++){
	arr[i].addEventListener("click",expectPlayingAudio();)
}
const stop =  document.getElementByClassName("stop");