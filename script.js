var button = document.getElementsByTagName("button")[0];
let input = document.getElementById("input");
let ul = document.querySelector("ul")


button.addEventListener("click", function () {
	if(input.value.length > 0){
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
	
})


input.addEventListener("keypress", function (event) {
	if(input.value.length > 0 && event.keyCode === 13){
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
	
})
