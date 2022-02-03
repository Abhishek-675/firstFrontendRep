var userId = document.querySelector("#user");
var mailId = document.querySelector("#mail");
var form = document.querySelector("#form");

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    let obj1 = {
        name: userId.value,
        email: mailId.value
    };
    localStorage.setItem(obj1.email, JSON.stringify(obj1));

    showUser(obj1);
}

function showUser(user){
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li> ${user.name}, ${user.email} </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

document.addEventListener('DOMContentLoaded', ()=>{
    Object.keys(localStorage).forEach((key) => {
        stringifiedDetailsOfPeople = localStorage.getItem(key);
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        showUser(detailsOfPeople);
        });
});

// Object.keys(localStorage).forEach((key) => {
//     stringifiedDetailsOfPeople = localStorage.getItem(key);
//     detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
//     addNewLineElement(detailsOfPeople);
//     });