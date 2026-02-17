
// Object gives us all infmation we need, we can swap propeerties around and still understand.
const drink = {
    colour: 'brown',
    carbonated: true,
    sugar: 40
};

// array gives us less information and we have to already understand that the first item in colour, 
// second is if its carbonated, and third is sugar content. if we Swich there around by mistake then
//  we have no clue what is happening.
const pepsi = ['brown', true, 40];


// annotation makes the array into a tuple
const coke: [string, boolean, number] = ['brown', true, 40];


// type alias 

type Drink = [string, boolean, number]

const tea: Drink = [ 'brown', false, 0]

