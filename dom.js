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

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white';