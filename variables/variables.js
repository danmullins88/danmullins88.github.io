document.getElementById("submit").addEventListener("click" , function() {
	var your_food = document.getElementById("your_food").value;
	var greeting = document.getElementById("greeting");
	
	if (your_food == "pizza" || your_food == "Pizza") {
		greeting.innerHTML = '<img src="https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png" />';
		} else if (your_food == "ice cream") {
			greeting.innerHTML = '<img src="http://www.pngmart.com/files/3/Ice-Cream-Cone-PNG-Image.png" />';
		} else if (your_food == "pasta") {
			greeting.innerHTML = '<img src="http://derwentparkpizza.com.au/wp-content/uploads/2016/07/Pasta-PNG.png" />';
		} else if (your_food == "steak") {
			greeting.innerHTML = '<img src="https://simply-essentials.com/wp-content/uploads/2017/03/uncompromised_flavor.png" />';
		} else if (your_food == "burger") {
			greeting.innerHTML = '<img src="http://www.freepngimg.com/download/burger/2-2-burger-free-download-png.png" />';
		} else if (your_food == "tacos") {
			greeting.innerHTML = '<img src="http://taqueriaelheredero.com/wp-content/uploads/2015/10/taco2.png" />';
		} else if (your_food == "bacon") {
			greeting.innerHTML = '<img src="http://www.freepngimg.com/download/bacon/8-2-bacon-png.png" />';
		} else if (your_food == "french fries") {
			greeting.innerHTML = '<img src="https://images.eatthismuch.com/site_media/img/433548_Awesomekiwi_7c573ed6-b496-4ced-b536-d951689b1e44.png" />';
		} else if (your_food == "pancakes") {
			greeting.innerHTML = '<img src="http://pngriver.com/wp-content/uploads/2018/03/Download-Pancakes-PNG-Photos-413x279-362.png" />';
		} else if (your_food == "mexican") {
			greeting.innerHTML = '<img src="https://www.elchico.com/wp-content/uploads/2014/08/backgroundStory.png" />';
		} else if (your_food == "sushi") {
			greeting.innerHTML = '<img src="http://www.pngmart.com/files/3/Sushi-PNG-HD.png" />';
		} else {
			greeting.innerHTML = "Hi " + your_name + "!"
		    greeting.style.color = "orange";
		}





});