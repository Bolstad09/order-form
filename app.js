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





// function ClickableImage(name, filename){
//   this.clicks=0;
//   this.fileName=filename;
//   this.displayCount=0;
//   this.name=name;
// }

// var displayedImageIds= [];
// var allImages = [];
// var totalNumberOfClicks = 0;

// function initializeImageObjects(){
//   allImages.push(
//     new ClickableImage('bag', 'img/bag.jpg'),
//     new ClickableImage('banana', 'img/banana.jpg'),
//     new ClickableImage('bathroom', 'img/bathroom.jpg'),
//     new ClickableImage('boots', 'img/boots.jpg'),
//     new ClickableImage('breakfast', 'img/breakfast.jpg'),
//     new ClickableImage('bubblegum', 'img/bubblegum.jpg'),
//     new ClickableImage('chair', 'img/chair.jpg'),
//     new ClickableImage('cthulhu', 'img/cthulhu.jpg'),
//     new ClickableImage('dog-duck', 'img/dog-duck.jpg'),
//     new ClickableImage('dragon', 'img/dragon.jpg'),
//     new ClickableImage('pen', 'img/pen.jpg'),
//     new ClickableImage('pet-sweep', 'img/pet-sweep.jpg'),
//     new ClickableImage('tauntaun', 'img/tauntaun.jpg'),
//     new ClickableImage('unicorn', 'img/unicorn.jpg'),
//     new ClickableImage('usb', 'img/usb.jpg'),
//     new ClickableImage('water-can', 'img/water-can.jpg'),
//     new ClickableImage('wine-glass', 'img/wine-glass.jpg')
//   );
// }
// //grabbing the id and creating addeventlistener to all displayed images[i]
// function initializeImageDisplay(){
//   var displayedImages = document.getElementById('container').children;
//   for(var i = 0; i < displayedImages.length; i++){
//     displayedImageIds[i] = allImages[i].name;
//     displayedImages[i].id = allImages[i].name;
//     displayedImages[i].src = allImages[i].fileName;
//     displayedImages[i].addEventListener('click', imageSelectionHandler);
//   }
// }

// function bootStrapApplication(){
//   initializeImageObjects();
//   initializeImageDisplay();
// }
// bootStrapApplication();

// function imageSelectionHandler(event){
//   if(totalNumberOfClicks < 25){
//     totalNumberOfClicks++;
//     var clickedImageName = event.target.id;
//     for(var l = 0; l < allImages.length; l++){
//       if(clickedImageName === allImages[l].name){
//         allImages[l].clicks++;
//         break;
//       }
//     }
//     var threeDisplayedImages = document.getElementById('container').children;
//     var newImageIds = [];
//     var i = 0;
//     while(newImageIds.length < 3){
//       var isDuplicate = false;
//       var isFromPriorThree = false;
//       var randomImageIndex = Math.floor(Math.random() * 17);
//       var newImage = allImages[randomImageIndex];
//       for(var k = 0; k < displayedImageIds.length; k++){
//         if(newImage.name === displayedImageIds[k]){
//           isFromPriorThree = true;
//           break;
//         }
//       }
//       for(var j = 0; j < newImageIds.length; j++){
//         if(newImage.name === newImageIds[j]){
//           isDuplicate = true;
//           break;
//         }
//       }

//       if(!isDuplicate && !isFromPriorThree){
//         newImageIds.push(newImage.name);
//         newImage.displayCount++;
//         threeDisplayedImages[i].id = newImage.name;
//         threeDisplayedImages[i].src = newImage.fileName;
//         i++;
//       }
//     }

//     displayedImageIds= newImageIds;
//   }
//   else{
//     console.log('done with clicks: ' + totalNumberOfClicks);
//     var container = document.getElementById('container').children;
//     for(var p = 0; p < container.length; p++){
//       container[p].removeEventListener('click', imageSelectionHandler);
//     }
//     document.getElementById('container').innerHTML = '';
//     storeData();
//     renderData();
//   }
// }

// function storeData(){
//   var dataSet = allImages.map(img => {
//     return {
//       name: img.name,
//       clicks: img.clicks,
//       displayCount: img.displayCount
//     };
//   });
//   var stringifiedData = JSON.stringify(dataSet);
//   localStorage.setItem('imagedata', stringifiedData);

//   var cachedData = localStorage.getItem('imagedata');
//   var parsedData = JSON.parse(cachedData);
//   console.log(parsedData);

// }

// function renderData(){
//   var imageClicks = [];
//   var imageNames = [];
//   var imageClickPercentages = [];
//   for(var i = 0; i < allImages.length; i++){
//     imageClicks.push(allImages[i].clicks);
//     imageNames.push(allImages[i].name);
//     imageClickPercentages.push(allImages[i].clicks/totalNumberOfClicks);
//   }
// }