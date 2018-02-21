'use strict';


//local storage
function addToCart(event){
  event.preventDefault();
  console.log('i invoked');
  console.log(event.target);
  var cart;
  if(!localStorage.getItem('shoppingcart')){
    cart = [];
    cart.push({
      name: event.target.items.value,
      quanitity: event.target.count.value
    });
    localStorage.setItem('shoppingcart', JSON.stringify(cart));
  }else{
    var jsonCart = localStorage.getItem('shoppingcart');
    console.log(jsonCart);
    cart = JSON.parse(jsonCart);
    cart.push({
      name: event.target.items.value,
      quantity: event.target.count.value
    });
    jsonCart = JSON.stringify(cart);
    localStorage.setItem('shoppingcart', jsonCart);
  }

}
function bootStrapApplication(){
  var submitForm = document.getElementById('submitform');
  submitForm.addEventListener('submit', addToCart);
  console.log('check if it works');
}
bootStrapApplication();



