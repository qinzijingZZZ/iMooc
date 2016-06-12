//获取页面
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");

// 获取音乐以及图标按钮
var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];
// 当音乐播放完毕，自动停止光盘旋转效果
audio.addEventListener("ended", function (event) {		
	music.setAttribute("class", "");
	//music.style.animationPlayState = 'paused';
	//music.style.webkitAnimationPlayState = 'paused';
}, false);
//点击音乐图标，控制音乐效果
music.onclick=function function_name() {		
	if (audio.paused) {
		audio.play();
		this.setAttribute("class", "play");
		//this.style.animationPlayState="running";
		//this.style.webkitAnimationPlayState="running";

	} else {
		audio.pause();
		this.setAttribute("class", "");	
		//this.style.animationPlayState="paused";
		//this.style.webkitAnimationPlayState="running";
	}	
};
// music.addEventListener("touchstart",function (event) {
// 	if (audio.paused) {
// 		audio.play();
// 		this.setAttribute("class", "play");
// 		//this.style.animationPlayState="running";
// 		//this.style.webkitAnimationPlayState="running";

// 	} else {
// 		audio.pause();
// 		this.setAttribute("class", "");	
// 		//this.style.animationPlayState="paused";
// 		//this.style.webkitAnimationPlayState="running";

// 	};	
// } ,false);
// 点击则页面切换
page1.onclick=function () {
	page1.style.display="none";
	page2.style.display = "block";
	page3.style.display = "block";
	page3.style.top     = "100%";
	setTimeout(function (event) {
		page2.setAttribute("class", "page fadeOut");
		page3.setAttribute("class", "page fadeIn");
	}, 5500)
};
// page1.addEventListener("touchstart", function (event) {
// page1.style.display="none";
// page2.style.display = "block";
// },false);
// page2.onclick=function () {
// 	page2.style.display="none";
// 	page3.style.display = "block";
// };
// page2.addEventListener("touchstart", function (event) {
// 	page2.style.display="none";
// 	page3.style.display = "block";
// },false);

// page3.onclick=function () {
// 	page3.style.display="none";
// 	page1.style.display = "block";
// };