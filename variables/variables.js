document.getElementById("submit").addEventListener("click" , function() {
	var your_food = document.getElementById("your_food").value;
	var fav_drink = document.getElementById("fav_drink").value;
	var greeting = document.getElementById("greeting2");
	
	if(your_food == "pizza") {
		var greeting_1 = '<img src="https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png" />';
		} else if (your_food == "ice cream") {
			var greeting_1 = '<img src="http://www.pngmart.com/files/3/Ice-Cream-Cone-PNG-Image.png" />';
		} else if (your_food == "pasta") {
			var greeting_1 = '<img src="http://derwentparkpizza.com.au/wp-content/uploads/2016/07/Pasta-PNG.png" />';
		} else if (your_food == "steak") {
			var greeting_1 = '<img src="https://simply-essentials.com/wp-content/uploads/2017/03/uncompromised_flavor.png" />';
		} else if (your_food == "burger") {
			var greeting_1 = '<img src="http://www.freepngimg.com/download/burger/2-2-burger-free-download-png.png" />';
		} else if (your_food == "tacos") {
			var greeting_1 = '<img src="http://taqueriaelheredero.com/wp-content/uploads/2015/10/taco2.png" />';
		} else if (your_food == "bacon") {
			var greeting_1 = '<img src="http://www.freepngimg.com/download/bacon/8-2-bacon-png.png" />';
		} else if (your_food == "french fries") {
			var greeting_1 = '<img src="https://images.eatthismuch.com/site_media/img/433548_Awesomekiwi_7c573ed6-b496-4ced-b536-d951689b1e44.png" />';
		} else if (your_food == "pancakes") {
			var greeting_1 = '<img src="http://pngriver.com/wp-content/uploads/2018/03/Download-Pancakes-PNG-Photos-413x279-362.png" />';
		} else if (your_food == "mexican") {
			var greeting_1 = '<img src="https://www.elchico.com/wp-content/uploads/2014/08/backgroundStory.png" />';
		} else if (your_food == "sushi") {
			var greeting_1 = '<img src="http://www.pngmart.com/files/3/Sushi-PNG-HD.png" />';
		} else {
			var greeting_1 = "Hey, I love " + your_food + "too!"
		    greeting_1.style.color = "orange";
		}

	if(fav_drink == "water") {
		var greeting_2 = '<img src="https://www.polandspring.com/sites/g/files/xknfdk241/files/Website%20Assets%202017%20%28Poland%20Spring%2C%20Website%2C%20Greatness%20Springs%20From%20Here%2C%20Homepage%20Hero%20Bottle%2C%202017%29.png" />';
		} else if (fav_drink == "tea") {
			var greeting_2 = '<img src="http://www.pngmart.com/files/4/Tea-PNG-HD.png" />';
		} else if (fav_drink == "coffee") {
			var greeting_2 = '<img src="https://www.pngarts.com/files/1/Coffee-PNG-Image.png" />';
		} else if (fav_drink == "orange juice") {
			var greeting_2 = '<img src="https://www.minutemaid.com/content/dam/minutemaid/hero/PremiumOrangeJuice_10flozBottle_Hero.png" />';
		} else if (fav_drink == "beer") {
			var greeting_2 = '<img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43c095.png" />';
		} else if (fav_drink == "coke") {
			var greeting_2 = '<img src="http://www.pngmart.com/files/1/Coca-Cola-PNG-Photos.png" />';
		} else if (fav_drink == "wine") {
			var greeting_2 = '<img src="http://www.freepngimg.com/download/bacon/8-2-bacon-png.png" />';
		} else if (fav_drink == "vodka") {
			var greeting_2 = '<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c240.png" />';
		} else if (fav_drink == "sangria") {
			var greeting_2 = '<img src="http://junior.rockyspizzeria.mx/wp-content/uploads/2017/08/SANGRIA.png" />';
		} else if (fav_drink == "sake") {
			var greeting_2 = '<img src="https://cdn.shopify.com/s/files/1/2008/6883/products/kariho-rokushu-sparkling-sake-720ml_1024x1024.png?v=1495011773" />';
		} else if (fav_drink == "lemonade") {
			var greeting_2 = '<img src="https://vignette.wikia.nocookie.net/chickfila/images/2/2a/Lemonade.png/revision/latest?cb=20171107135044" />';
		} else {
			var greeting_2 = "Hiii, " + fav_drink + " tastes horrible!"
		    greeting.style.color = "lightblue";
		}


greeting.innerHTML = greeting_1 + greeting_2;

});
