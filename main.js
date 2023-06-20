function total() {
    let qte = Array.from(document.querySelectorAll('.quantity'));
    let price = Array.from(document.querySelectorAll('.total-price'));
    let s = 0;
    for (let i = 0; i < price.length; i++) {
      s += parseInt(price[i].innerHTML.substring(1)) * parseInt(qte[i].querySelector('input').value);
    }
    document.querySelector(".somme").innerHTML = s;
  }
  
  // Appels des fonctions
  var deleteButtons = document.querySelectorAll(".delete-btn, .delete-btn-item");
  deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var item = this.parentNode.parentNode;
      item.parentNode.removeChild(item);
      total(); // Mettre à jour la somme après la suppression
    });
  });
  
  var likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      this.classList.toggle("is-active");
    });
  });
  
  var plusButtons = document.querySelectorAll(".plus-btn");
  var minusButtons = document.querySelectorAll(".minus-btn");
  var quantityInputs = document.querySelectorAll("input[name='name']");
  
  plusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      quantityInputs[index].value++;
      total(); // Mettre à jour la somme après l'augmentation de la quantité
    });
  });
  
  minusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      if (quantityInputs[index].value > 0) {
        quantityInputs[index].value--;
        total(); // Mettre à jour la somme après la diminution de la quantité
      }
    });
  });
  
  
  total(); // Calculer la somme initiale