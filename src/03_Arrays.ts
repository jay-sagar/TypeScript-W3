const names: String[] = [];
names.push("Hello");
// names.push(2);  => can't do this

const number: readonly number[] = [1, 2, 3]; // can only read

// Type Inference
const value = [1, 2, 3];
// value.push("String") => Error