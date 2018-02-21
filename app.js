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


function getImageFiles(){
  console.log('worked');
  var cart = JSON.parse(localStorage.getItem('shoppingcart'));
  var imgListTag = document.getElementById('cartlist');
  for(var i = 0; i < cart.length; i++){
    var formTag = document.createElement('form');
    formTag.id = cart[i].name;
    var imgTag = document.createElement('img');
    imgTag.src = 'img/' + cart[i].name + '.jpg';
    var deleteTag = document.createElement('input');
    deleteTag.type='submit';
    deleteTag.value = cart[i].name;
    deleteTag.addEventListener('click', removeFromCart);
    formTag.appendChild(imgTag);
    formTag.appendChild(deleteTag);
    imgListTag.appendChild(formTag);
  }

}
window.onload = function(){
  getImageFiles();
};



function removeFromCart(event){

  var items = JSON.parse(localStorage.getItem('shoppingcart'));
  items = items.filter(function(item){
    return item.name !== event.target.value;
  });
  localStorage.setItem('shoppingcart', JSON.stringify(items));
  getImageFiles();
}
