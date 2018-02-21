'use strict';


var btn = document.getElementById('btn');
var input = document.getElementById('item');
var tasks = document.getElementById('tasks');
var dropDown = document.getElementById('dropDown');
var inCart = document.getElementById('inCart');

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
  list = [];
}


function save() {
  list.push(input.value);
  localStorage.list = list;
  console.log('list arr:', list);
  console.log('localStorage list:', localStorage.list);
}


function create() {
  var val = input.value;
  var item = document.createElement('li');

  item.appendChild(document.createTextNode(val));
  tasks.appendChild(item);
  input.value = '';
}

function load() {
  if(localStorage.list) {
    var item;
    for (var x = 0; x < list.length; x++) {
      item = document.createElement('li');
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





// function addToCart() {
//   var add = 
// }



function dropDownList() {
  for (var i = 0; i < allpictures.length; i++) {
    var shopItems = document.createElement('option');
    shopItems.textContent = allpictures[i].name;
    dropDown.appendChild(shopItems);
  }
}

dropDownList();


