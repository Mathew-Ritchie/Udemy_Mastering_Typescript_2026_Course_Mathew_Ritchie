
// Arrow
const add = ( a: number , b: number ): number => {
    return a + b;
};
// Named 
function devide( a: number , b: number): number {
    return a / b;
}

//Anonymous 
const multiply = function( a:number , b: number): number {
    return a * b
}

// Use of void when your function doesn't return anything
const logger = (message: string ): void => {
    console.log(message)
}

// use never when you dont expect a function to return anything ever. 
const throwError = (message: string): never => {
    throw new Error(message);
}


//// 
const todaysWeather = {
    date: new Date(),
    weather: 'summy'
};

//destructuring of the object from todaysWeather to {date, weather} 
const logWeather = ({date , weather}: {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)
