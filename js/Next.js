funtion Next (minNum,maxNum) {
	number = Math.floor(Math.random()*(max-min+1)+min);
	var bg = document.getElementById("bg");
	bg.style.backgroundImage="url("Blackground/background"+number+".png")";
}
