//pattern output
	

	var myWrapper = document.getElementById("wrapper");
	var otherWrapper = document.getElementById("otherWrapper");



	for (var i = 0; i <150; i++) {

		var myModule = `
		<div class="module"
		style="background-color:black">
			<div class="module_child"
			style="background-color:rgb(${250-i%100},${250-i%100},0);
			transform: rotate(${i});
			height:2px;
			"></div
		</div>
		`;

		myWrapper.insertAdjacentHTML('beforebegin',myModule);


		var stripe = `
			<div class="stripe"
			style="transform: rotate(${i+10}deg);
			height:${(i+40)/30}px;"
			>
			</div>
		`;

		myWrapper.insertAdjacentHTML('beforebegin',stripe);

		var horizontalstripe_even = `
			<div class="horizontalstripe_even">
			</div>
		`;

		var horizontalstripe_odd = `
			<div class="horizontalstripe_odd"
			style="background-color:blue;"
			>
			</div>
		`;

		var horizontalstripe = i;

			if (i%2 ===0){
				myWrapper.insertAdjacentHTML('beforebegin',horizontalstripe_even);
			} else {
				myWrapper.insertAdjacentHTML('beforebegin',horizontalstripe_odd);
			}

			if (i <= 100){
				var horizontalstripe= `
					<div class="horizontalstripe"
					style="background-color:rgb(${0+(i*2.5)},${0+(i*2.5)},${0+(i*2.5)});"
					>
					</div>
				`;
			}else if(i<=200){
				var horizontalstripe= `
					<div class="horizontalstripe"
					style="background-color:rgb(${250-i%100},${250-i%100},0);"
					>
					</div>
				`;
			}else{
				var horizontalstripe= `
					<div class="horizontalstripe"
					style="background-color:rgb(${0+(i)},${0+(i*55/255)},${0+(i*55/255)});"
					>
					</div>
				`;
			}

			myWrapper.insertAdjacentHTML('beforebegin',horizontalstripe);
}
var j =0;

//delayed animation (dots)

var delayedEvenstripe = function(j){
	var changingR = 0;
	var changingG = 0;
	var changingB = 0;

	if(j<=10){
		var changingR = 255-(j*20);
	}else {
		var changingG = 10+(j*10);
	}

	var changingY = j*100;
	var changingZ = Math.round(j * .5)
	var horizontalstripe_delayed = `
		<div class="horizontalstripe_delayed"
		style="background-color:rgb(${changingR},${changingG},${changingB});
		top:${changingY}px;
		z-index: ${changingZ};
		">
		</div>
	`;


otherWrapper.insertAdjacentHTML('afterend',horizontalstripe_delayed);
};

var timeout = function(){
	for (var j = 0; j < 20; j++) {
		setTimeout(delayedEvenstripe, j*10000, j)
	};
}

setTimeout(timeout,5000);


//interactions

//color change on mouse hover 

var stripeColorChange = function(){
	
	var body = document.querySelector("body");
	var object = document.getElementsByClassName("horizontalstripe_even");
	var otherObject = document.getElementsByClassName("horizontalstripe_odd");
	var lastObject = document.getElementsByClassName("module_child");
	var module = document.getElementsByClassName("module");



	console.log(object)
	// console.log("window.scrollY", window.scrollY)
	// console.log("window.innerHeight", window.innerHeight)
	// console.log("body.offsetHeight: ", body.offsetHeight)
	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;

	var newPercentage = (event.pageX + event.pageY)/(widthOfBrowser+heightOfBrowser)
	var percentageX = event.pageX/widthOfBrowser;
	var red = 0 + (255 * (newPercentage));
	var percentageY = event.pageY/heightOfBrowser;
	var blue = 100 + (255 * (newPercentage));
	var green = 0 + (100 * (newPercentage));
	var otherGreen = 150 + (100 * (percentageY));

	var speedX = percentageX * 60;

	console.log('red:', red);
	console.log('blue:', blue);

	for (k=0; k<object.length; k++){
		object[k].style.backgroundColor = `rgb(${red},0,0)`;
		otherObject[k].style.backgroundColor = `rgb(0,${green},${blue})`;
	}
	
	for (k=0; k<lastObject.length; k++){
		lastObject[k].style.backgroundColor = `rgb(255,${otherGreen},0)`;
		}
	
	// console.log(object.style.backgroundColor);


}

window.addEventListener("mousemove", stripeColorChange)


var scrolling = function(){
	var body = document.querySelector("body");
	var backgroundStripe = document.getElementsByClassName("horizontalstripe");
	var otherObject = document.getElementsByClassName("horizontalstripe_odd");
	var lastObject = document.getElementsByClassName("module_child");
	var module = document.getElementsByClassName("module");


	// console.log("window.scrollY", window.scrollY)
	// console.log("window.innerHeight", window.innerHeight)
	// console.log("body.offsetHeight: ", body.offsetHeight)

	var percentageScrolled = (window.scrollY + window.innerHeight)/body.offsetHeight;
	console.log(percentageScrolled)
	var color = Math.round(percentageScrolled * 200);

	var speed = Math.round((percentageScrolled * 5) * 50);

	if(percentageScrolled >= .95 ){
		window.scrollTo(0,0)
	}

	for (c=0; c<backgroundStripe.length; c++){
		backgroundStripe[c].style.backgroundColor = `rgb(${color},${color},${color})`;
	}

	for (c=0; c<lastObject.length; c++){
		lastObject[c].style.animationDuration = `${speed}s`;
		// otherObject[c].style.animationDuration = `${speed}s`;
		}

	console.log('animation speed module_child:', speed)

}


window.addEventListener("scroll", scrolling);

















// var objectMove = function(event){

// 	var widthOfBrowser = window.innerWidth;
// 	var heightOfBrowser = window.innerHeight;

// 	console.log("browser size: ", widthOfBrowser, heightOfBrowser)
// 	console.log("mouse position: ", event.pageX, event.pageY)

// 	var object = document.querySelector(".horizontalstripe_delayed");


// 	// var percentageX = event.pageX/widthOfBrowser;
// 	var newpositonX = event.pageX; 
// 	var newpositonY = event.pageY;

// 	// var percentageY = event.pageY/heightOfBrowser;

// 	// output new position
// 	object.style.left = `${newpositonX}px`;
// 	object.style.top = `${newpositonY}px`;

// 	// console.log(document.querySelector('.horizontalstripe_delayed'));

// }

// // event listener: 

// 	window.addEventListener("mousemove", objectMove);
