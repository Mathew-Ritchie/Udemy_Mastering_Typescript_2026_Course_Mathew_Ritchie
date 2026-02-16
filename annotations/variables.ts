const apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects 

let now: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 'blue'];
let mytNumbers: number[] = [1,2,3,4,5]
let truths: boolean[] = [true,false,true];

//Classes 

class Car {

}

let car: Car = new Car();

// Object literal 
let point: {x: number; y: number } = {
    x: 10,
    y: 20, 
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};


// When to use annotations 

//1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: {x:number , y:number} = JSON.parse(json);
console.log(coordinates);  // {x:10 ,y:20};

//2) When we declare variable on one line and initialise later
let words = ['red', 'green', 'blue']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
//3) variable whose type cannot be inferred correctly 


let numbers: number[] = [-10, -1, 12];
let numberAboveZero: number | undefined;

for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];

    if (current !== undefined && current > 0) {
        numberAboveZero = current;
        break;
    }
}