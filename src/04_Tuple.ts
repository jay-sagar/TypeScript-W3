// A tuple is a typed array with a pre-defined length and types for each index.

let ourTuple: [number, boolean, string];

// if we try to set them in the wrong order, it will throw an error
ourTuple = [4, false, 'coding god was here'];

//Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

// ReadOnly Tuple

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off'); => throw an error 

// Named Tuples
// Named tuples allow us to provide context for our values at each index.
// const graph: [x: number, y: number] = [55.2, 41.3];

// Destructing tuple
// Since tuples are arrays we can also destructure them.
const graph2: [number, number] = [55.2, 41.3];
const [num1, num2] = graph2;
console.log(num1, num2);