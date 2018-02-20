'use strict';
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// Item.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

// function Item(name) {
//   this.name = name;


var btn = document.getElementById('btn');
var input = document.getElementById('item');
var tasks = document.getElementById('tasks');

var allpictures = [];


function Pictures(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allpictures.push(this);
}


new Pictures('Bag', 'img/bag.jpg');
new Pictures('Banana Slicer', 'img/banana.jpg');
new Pictures('Bathroom', 'img/bathroom.jpg');
new Pictures('Boots', 'img/boots.jpg');
new Pictures('Breakfast', 'img/breakfast.jpg');
new Pictures('Meatball Gum', 'img/bubblegum.jpg');
new Pictures('Chair', 'img/chair.jpg');
new Pictures('Cthulhu', 'img/cthulhu.jpg');
new Pictures('Dog-Duck', 'img/dog-duck.jpg');
new Pictures('Dragon Meat', 'img/dragon.jpg');
new Pictures('Pen', 'img/pen.jpg');
new Pictures('Pet Sweeper', 'img/pet-sweep.jpg');
new Pictures('Tauntaun', 'img/tauntaun.jpg');
new Pictures('Unicorn Meat', 'img/unicorn.jpg');
new Pictures('Usb', 'img/usb.gif');
new Pictures('Water Can', 'img/water-can.jpg');
new Pictures('Wine Glass', 'img/wine-glass.jpg');


if(localStorage.list) {
  var list = localStorage.list.split(',');
} else {
  var list = [];
}


function save() {
  list.push(input.value);
  localStorage.list = list;
  // meta data so you can see what is happening in action
  console.log('list arr:', list);
  console.log('localStorage list:', localStorage.list);
}


function create() {
  var val = input.value;
  //creating the item so getting the value of the input
  var item = document.createElement('li');

  item.appendChild(document.createTextNode(val));
  //need to take our tasks which is our ul and append child with the added li we just created
  tasks.appendChild(item);
  //each time you press enter you get a new empty value to enter a new val
  input.value = '';
}

function load() {
  if(localStorage.list) {
    //set up an item so we can deal with our for loop
    //creating an arbitrary loop starting at zero and incrementing up through the array
    var item;
    for (var x = 0; x < list.length; x++) {
      item = document.createElement('li');
      //stuff text into the li
      //list to the x will have all of our text in it
      item.appendChild(document.createTextNode(list[x]));

      tasks.appendChild(item);
    }
  }
}


function render() {
  save();
  create();
}

load();

btn.addEventListener('click', render);




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}








// function dropdownMenu() {
//   document.getElementById('myDropdown').classList.toggle('show');
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdown = document.getElementById('dropdown');
//     var dropdowns = document.getElementsByClassName('dropdown-content');
//     dropdown.textContent = Item.names;
//     dropdown.appendChild(dropdowns);
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };




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