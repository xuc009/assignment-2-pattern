

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



	for (var i = 0; i <100; i++) {
		var changingColor = i;

			// changingColor += 10; //aka changingColor = changingColor +10
			// if (i%2 ===0){
			// 	//even
			// changingColor += 20
			// } else {
			// 	//odd
			// 	changingColor -= 40
			// }

		var myModule = `
		<div class="module"
		style="background-color:black">
			<div class="module_child"
			style="background-color:rgb(${250-i%100},${250-i%100},0);
			transform: rotate(${i});
			height:${i/3}px;
			"></div
		</div>
		`;

		myWrapper.insertAdjacentHTML('beforebegin',myModule);


		var stripe = `
			<div class="stripe"
			style="transform: rotate(${i+10}deg);
			height:${i/3}px;"
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

			var horizontalstripe= `
				<div class="horizontalstripe"
				style="background-color:black;"
				>
				</div>
			`;

			myWrapper.insertAdjacentHTML('beforebegin',horizontalstripe);


}
