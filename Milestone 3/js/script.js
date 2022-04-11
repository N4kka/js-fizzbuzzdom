//Printing on console numbers from 1 to 100, call it "Fizz"
 //if it is multiple of 3, "Buzz" if it is multiple of 5
 for (let i = 1; i <= 100; i++) {
    // 1. Define if it's Fizz or Buzz
    let fizzOrBuzz;

    if (i % 15 === 0) {
        fizzOrBuzz = "FizzBuzz";
    } else if (i % 5 === 0) {
        fizzOrBuzz = "Buzz";
    } else if (i % 3 === 0) {
        fizzOrBuzz = "Fizz";
    }

    
    console.log(i, fizzOrBuzz);
}

//Print on HTML page
// 2. Print the algorithm
const rowWrapper = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
    rowWrapper.innerHTML += `<div class="box">${i}</div>`
    console.log(rowWrapper);
    let fizzOrBuzz;

    if (i % 15 === 0) {
        fizzOrBuzz = "FizzBuzz";
    } else if (i % 5 === 0) {
        fizzOrBuzz = "Buzz";
    } else if (i % 3 === 0) {
        fizzOrBuzz = "Fizz";
    }

    
    console.log(i, fizzOrBuzz);
}