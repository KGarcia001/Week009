


let firstName = document.querySelector('#tableFirstName');
let favoriteColor = document.querySelector('#tableFavoriteColor');
let table = document.querySelector('table');


function addIntoTable() {
    let row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    
    
    cell1.innerHTML = firstName.value;
    cell2.innerHTML = favoriteColor.value;
}






//   let button = document.getElementById('p-button');
//   let content= document.getElementById('p-div');


// document.getElementById('p-button').addEventListener('click', () =>{
//     var parent = document.getElementById('p-div');
//     var newElement = document.createElement('p');
//     newElement.innerHTML = document.getElementById('p-input').value;
//     parent.appendChild(newElement);
//     document.getElementById('p-input').value = '';
// });

