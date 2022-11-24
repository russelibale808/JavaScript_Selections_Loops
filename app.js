console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else{
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
    console.log(i)
    if (i % 3 == 0 && i % 5 ==0) {
        console.log('FIZZBUZZ')
    } else {
        if (i % 5 == 0) {
            console.log('BUZZ')
        }

        if  (i % 3 ==0) {
            console.log('FIZZ')
        }
    }
} 

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
//WHILE LOOP (exercise 1 example)
let i = 0;
while (i  < 100) {
    if (i % 2 == 0) {
        
    } else {
        console.log(i);
    }
    i++;
}
//(exercise 2 example)
let a = 1;
while (a <= 100) {
    if (a % 3 == 0 && a % 5 ==0) {
        console.log('FIZZBUZZ')
    } else {
        if (a % 5 == 0) {
            console.log('BUZZ')
        }

        if  (a % 3 ==0) {
            console.log('FIZZ')
        }
    }
    a++;
}

//DO WHILE (exercise 1 example)
let b = 0;
do {
    if (b % 2 == 0) {
        
    } else {
        console.log(b);
    }
    b++;
} while (b <= 100);

//(exercise 2 example)
let c = 1;
do {
    if (c % 3 == 0 && c % 5 ==0) {
        console.log('FIZZBUZZ')
    } else {
        if (c % 5 == 0) {
            console.log('BUZZ')
        }

        if  (c % 3 ==0) {
            console.log('FIZZ')
        }
    }
    c++;
} while (c <= 100);

//Exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for ( let i = 1; i <= n; i++) {
    if (i == value) {
        console.log(`Found ${value}`);
        break;
    }

    if (i == n) {
        console.log(`Could not find ${value} within 1-${n}`);
    }
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <= end; i++) {
    console.log(start, end);
    if (i % fizzDivisor == 0) {
        console.log('FIZZ')
    }

    if  (i % buzzDivisor ==0) {
        console.log('BUZZ')
    }
}