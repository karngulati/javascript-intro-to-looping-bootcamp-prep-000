function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`);
     } else {
       array.push(`I am ${i} strange loops.`);
     }
  }
  return array;
}


function whileLoop(n) {
  let countdown = n;
  
    while (countdown > 0) {
      console.log(--countdown);
    }
    return "done";
}

let x = 0;

function incrementVariable() {
  x = x + 1;
  return x;
}

function doWhileLoop(n) {
  do {
    console.log("I run once regardless.");
    x++;
} while (incrementVariable() < x);
}


