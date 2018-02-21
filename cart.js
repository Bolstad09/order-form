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
function processOrder(){
  var deleteAll = 
  deleteAll.addEventListener('click', processOrder);
}


