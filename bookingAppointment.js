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
    document.getElementById('mail').value = '';
    document.getElementById('user').value = '';
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name}, ${user.email} 
                        <button onClick=deleteUser('${user.email}')> Delete User </button>
                        <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(emailId, name){

    document.getElementById('mail').value = emailId;
    document.getElementById('user').value = name;

    deleteUser(emailId)
 }

function deleteUser(emailId){
    console.log(emailId);
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}

document.addEventListener('DOMContentLoaded', ()=>{
    Object.keys(localStorage).forEach((key) => {
        stringifiedDetailsOfPeople = localStorage.getItem(key);
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        showUser(detailsOfPeople);
        });
});


