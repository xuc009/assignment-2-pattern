

	/****************** EXAMPLE 2: ******************/

	// example 2 outputs in our html document
	// the line below searches our HTML document for our element by its id
	var myWrapper = document.getElementById("wrapper");

	// for (var i = 0; i < 50; i++) {
	// 	// the for loop runs 50 times, so it adds the div below 50 times
	// 	// the string below contains a div, which is added (+=) to our wrapper with each for loop cycle.
	// 	// within our string, we are using the variable "i" to generate numbers that output inline css values
	// 	myWrapper.innerHTML += '<div class="patternUnit" style="background-color: rgb('+ (255 - (i*10)) +',' + (i*10) + ',0); transform: rotate('+ (10 + i) +'deg);"></div>';
	//
	// }



	for (var i = 0; i <200; i++) {
		var changingColor = i;

			changingColor += 10; //aka changingColor = changingColor +10
			if (i%2 ===0){
				//even
			changingColor += 20
			} else {
				//odd
				changingColor -= 40
			}

		var myModule = `
		<div class="module"
		style="background-color:rgb(${changingColor},0,0);">
			<div class="module_child"
			style="background-color:rgb(${255 - i},${255 * (i/5)},${i});
			transform: rotate(${i};
			"></div
		</div>
		`;

		myWrapper.insertAdjacentHTML('afterbegin',myModule);


		var stripe = `
			<div class="stripe"
			style="transform: rotate(${i+10}deg);"
			>
			</div>
		`;

		myWrapper.insertAdjacentHTML('afterbegin',stripe);

}
