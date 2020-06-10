

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs();

})

const dogsUrl = `http://localhost:3000/dogs`
const table = document.getElementById("table-body")
console.log(table)




function fetchDogs(){
    fetch(dogsUrl)
    .then(response => response.json())
    .then(dogs => dogs.forEach(dog=> {
        const tableRow = document.createElement('tr')
        tableRow.innerHTML = `<td>${dog.name}</td>
        <td>${dog.breed}</td>
        <td>${dog.sex}</td>
        <td><button type="click">Edit this dog!</button></td>`
    // table.append(tableRow)
}))}