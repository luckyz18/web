var i=0;
var timer;
onload=function(){
	timer = setInterval(showAd,4000);
}
function showAd(){
	i++;
	if(i==3){
		clearInterval(timer);
	}
	var adObj = document.getElementById("ad");
	adObj.style.display = "block";
	//2s之后隐藏  只执行一次
	setTimeout(hidAd,2000);
}
function hidAd(){
	document.getElementById("ad").style.display = "none";
}

	
