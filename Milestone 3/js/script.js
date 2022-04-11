// 3. Output
//Define Fizz, Buzz & FizzBuzz on HTML page with different colours
const rowWrapper = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    //Define Fizz or Buzz
    let fizzOrBuzz;
    
    if (i % 15 === 0) {
        fizzOrBuzz = "fizzbuzz";
    } else if (i % 5 === 0) {
        fizzOrBuzz = "buzz";
    } else if (i % 3 === 0) {
        fizzOrBuzz = "fizz";
    } else {
        fizzOrBuzz = i;
    }

    // Output on HTML
    rowWrapper.innerHTML += `<div class="box ${fizzOrBuzz}">${i, fizzOrBuzz}</div>`;
    
    console.log(i, fizzOrBuzz);
}