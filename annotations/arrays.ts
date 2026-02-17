const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake    = [
    ['f150'],
    ['rav 4'],
    ['spider']
]

// help with inference when extracting vlaues 
const car = carMakers[0];


//prevent incompatible values 
//carMakers.push(100)


//help with map
carMakers.map((car: string ): string => {
    return car.toLocaleUpperCase();
})



//flexible tyoes 
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push('2030-11-10')
importantDates.push(new Date())
// importantDates.push(100)