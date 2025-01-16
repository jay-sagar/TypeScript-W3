const car: {type: string, model: string, year: number} = {
    type: "toyota",
    model: "corolla",
    year: 2009
}

// Optional Properties

const car2: {type: string, mileage?: number} = {
    type: "toyota"
}
car2.mileage = 2000;


// Index Signature
// Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: {[index: string]: number} = {};

nameAgeMap.jay = 23;
nameAgeMap.chinku = 23;