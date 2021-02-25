document.addEventListener('DOMContentLoaded', (e) => {
    
  const featuredBuyButtons = document.querySelectorAll(".buy-btn-overlay");

  featuredBuyButtons.forEach(button => {

  	button.addEventListener("click", (e) => {

  		e.preventDefault();

  	});

  });



});