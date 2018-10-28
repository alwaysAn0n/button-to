window.addEventListener("load", function(event) {
	document.getElementById('username').focus();

	document.getElementById("money-button").addEventListener("click", function(){
		document.getElementById("section-form").classList.add("submitted");
	});
});

