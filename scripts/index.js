document.addEventListener('DOMContentLoaded', (e) => {

	document.addEventListener("click", handleBuyButton);	

});

const handleBuyButton = (e) => {

	if (e.target.classList.contains("buy-btn-overlay")) {;

		e.preventDefault();

	}

}


