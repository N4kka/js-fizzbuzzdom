//Print on HTML page
// 2. Print the algorithm
const rowWrapper = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
    rowWrapper.innerHTML += `<div class="box">${i}</div>`
    console.log(rowWrapper);
}