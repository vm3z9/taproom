document.addEventListener('DOMContentLoaded', (e) => {

	// listen for clicks
	document.addEventListener("click", handleBuyButton);	

});

/**
 * Detect clicks on 'buy now' button
 */
const handleBuyButton = (e) => {

	if (e.target.classList.contains("buy-btn-overlay")) {;

		e.preventDefault();

	}

}


