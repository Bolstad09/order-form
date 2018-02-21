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
    deleteTag.value = 'delete';
    deleteTag.name = cart[i].name;
    //deleteTag.innerHTML = 'delete';
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
  
  var removeIndex = items.findIndex(function(item){
    return item.name === event.target.name;
  });
  items.splice(removeIndex, 1);
  /*
  items = items.filter(function(item){
    return item.name !== event.target.name;
  });*/
  localStorage.setItem('shoppingcart', JSON.stringify(items));
  getImageFiles();
}
function processOrder(){
  var deleteAll = 
  deleteAll.addEventListener('click', processOrder);
}


