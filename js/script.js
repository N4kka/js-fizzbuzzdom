//Printing on console numbers from 1 to 100, call it "Fizz"
 //if it is multiple of 3, "Buzz" if it is multiple of 5
 for (let i = 1; i <= 100; i++) {
    //Define if it's Fizz or Buzz
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