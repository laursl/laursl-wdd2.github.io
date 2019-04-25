$(document).ready(function()  {

	// PART 1: YOUR CODE HERE
	for (let i = 0; i < 6; i++) {
	   var div = $("<div class="fruit"><img src="assets/img/fruit.jpeg"></div>");
			$(".fruit").append(div);
	}

	$(".nav-item").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");

		// UNCOMMENT THE SECTION BELOW FOR PART 2


		// YOUR CODE HERE - PART 2.1

		if (buttonActive) {
			$(this).addClass("active");
			$(this).removeClass("inactive");

			// YOUR CODE HERE - PART 2.2

		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");

			// YOUR CODE HERE - PART 2.2

		}


	})
})
