var buttonNames = document.getElementsByClassName("button");

for (var i = 0; i < buttonNames.length; i++) {
	alert(buttonNames[i].innerText); //można też zamiast innerText użyć textContent (lekcja 70 eduweb.pl)
}