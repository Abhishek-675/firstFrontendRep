// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// var item = document.getElementsByClassName('title');
// console.log(item);
// item[0].style.fontWeight = 'bold';
// item[0].style.color = 'green';
// var items = document.getElementById('items');
// console.log(items);
// var listGroupItem = document.getElementsByClassName('list-group-item');
// console.log(listGroupItem);
// listGroupItem[2].style.backgroundColor = 'green';
// for(var i=0; i<listGroupItem.length; i++){
//     listGroupItem[i].style.fontWeight = 'bold';
// }
// var li = document.getElementsByTagName('li');
// console.log(li);
// for(var i=0; i<li.length; i++){
//         li[i].style.color = 'red';
//     }

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'white';

// var secondItem = document.querySelectorAll('li:nth-child(even)');
// console.log(secondItem);
// secondItem[0].style.color = 'green';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
// newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

var newDiv2 = document.createElement('div');
newDiv2.className = 'hello2';
newDiv2.id = 'hello2.1';
var liText = document.createTextNode('HEllo');
newDiv2.appendChild(liText);
var li = document.querySelector('div .list-group');
var listGroupItem = document.querySelector('ul li');
console.log(newDiv2);
li.insertBefore(newDiv2, listGroupItem);
