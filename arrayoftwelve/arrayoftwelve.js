var beers = "Modelo,Budweiser,Guinness,Stella Artois,Heineken,Cools Light,Carlsberg,Blue Moon,Corona,Tennents,Saporo,Singha"
console.log(beers)

var exampleArray = [1, 2, 3, 5, "beer", null, true]

console.log(exampleArray)
console.log(exampleArray.toString() )

var nameArray = beers.split(",")
console.log(nameArray)


var container = document.querySelector(".output ul")

nameArray.forEach(function(theElement, itsIndex, theOriginalArray) {
	console.log(theElement + " beer " + itsIndex)
})


nameArray.forEach(make_a_list);
function make_a_list(el, ix) {
	var listItem = document.createElement("li")

	listItem.textContent = el

	container.appendChild(listItem)
}
