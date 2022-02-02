// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementByClassName('item'));
// console.log(document.getElementByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// ul.firstElementChild.style.background = 'green';
// ul.children[1].style.background = 'yellow';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#f73a12';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#1220f7';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
  
      setTimeout(() => msg.remove(), 3000);
    } else {
      let myObj = {
        name: nameInput.value,
        email: emailInput.value
      };

      let myobj_serialized = JSON.stringify(myObj);

      localStorage.setItem("myObj", myobj_serialized);

      let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

      console.log(myObj_deserialized);

      // localStorage.setItem('name', nameInput.value);
      // localStorage.setItem('email', emailInput.value);

      // const li = document.createElement('li');

      // li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
      // userList.appendChild(li);
  
      // nameInput.value = '';
      // emailInput.value = '';
    }
  }