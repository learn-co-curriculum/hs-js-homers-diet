// 1. Write a method called noDonuts that takes in a number of donuts as an argument. If the number of donuts is greater than zero then this function should return "Get back on your diet!" otherwise it should return "Good job, Homer!"
function noDonuts (num) {
	if ( num > 0 ) {
		return "Get back on your diet!";
	} else {
		return "Good job, Homer!";
	}
}


// 2. Homer's diet has been going well and we're going to cut him some slack. Write a new function called lessDonuts that takes in a number of donuts as an argument and tells Homer good job when he eats less than 3 donuts, to slow down if he's eaten exactly 3 donuts, and to get back on his diet if he eats more than 3 donuts.
function lessDonuts (num) {
	if ( num > 3 ) {
			return "Get back on your diet!";
	} else if ( num === 3) {
			return "Slow down!"
	} else {
			return "Good job, Homer!";
	}
}


// 3. We've decided to give Homer a little more control over his diet. Write a function called someDonuts that takes in two arguments - the number of donuts he has eaten and a maximum donut intake. This function should tell Homer good job if he eats less than half his maximum intake and to get back on his diet when he exceeds the maximum.
function someDonuts (eaten, maximum) {
	if (eaten < (maximum/2)) {
		return "Good job, Homer!";
	} else if (eaten > maximum){
		return "Get back on your diet!";
	}
}


// 4. Homer has decided to track both his donut intake and his cookie intake. Write a function called newDiet that takes in two arguments - number of donuts and number of cookies. As long as he eats zero donuts OR zero cookies this method should return "Good job!". If he eats 1 or more donuts AND 1 or more cookies it should tell him to get back on his diet.
function newDiet (donuts, cookies) {
	if ( (donuts > 0) || (cookies > 0) ) {
		return "Good job, Homer!";
	} else if ( (donuts > 1) && (cookies > 1) {
		return "Get back on your diet!";
	}
}
