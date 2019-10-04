

	/****************** EXAMPLE 2: ******************/

	// example 2 outputs in our html document
	// the line below searches our HTML document for our element by its id
	var myWrapper = document.getElementById("wrapper");
	var otherWrapper = document.getElementById("otherWrapper");

	// for (var i = 0; i < 50; i++) {
	// 	// the for loop runs 50 times, so it adds the div below 50 times
	// 	// the string below contains a div, which is added (+=) to our wrapper with each for loop cycle.
	// 	// within our string, we are using the variable "i" to generate numbers that output inline css values
	// 	myWrapper.innerHTML += '<div class="patternUnit" style="background-color: rgb('+ (255 - (i*10)) +',' + (i*10) + ',0); transform: rotate('+ (10 + i) +'deg);"></div>';
	//
	// }



	for (var i = 0; i <200; i++) {

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
			<div class="horizontalstripe_even"
			style="background-color:red;"
			>
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
	var horizontalstripe_delayed = `
		<div class="horizontalstripe_delayed"
		style="background-color:rgb(${changingR},${changingG},${changingB});
		top:${changingY}px;
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


//interaction 

var objectMove = function(event){

	var widthOfBrowser = window.innerWidth;
	var heightOfBrowser = window.innerHeight;

	console.log("browser size: ", widthOfBrowser, heightOfBrowser)
	console.log("mouse position: ", event.pageX, event.pageY)

	var body = document.querySelector(".module");

	// var percentageX = event.pageX/widthOfBrowser;
	var newpositonX = event.pageX; 

	// var percentageY = event.pageY/heightOfBrowser;
	var newpostionY = event.pageY;

	// output new position
	document.getElementsByClassName('.horizontalstripe_delayed')[0].style.left = `${newpositonX}px;`
	console.log(document.querySelector('.horizontalstripe_delayed'));

}

// event listener: 

	window.addEventListener("mousemove", objectMove);
