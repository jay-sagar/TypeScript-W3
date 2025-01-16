console.log("hello");

// Explicit Type
let firstName: string = "Jay";

// Implicit Type
// Note: Having TypeScript "guess" the type of a value is called infer.
let lastName = "Sagar";

//TypeScript may not always properly infer what the type of a variable may be. 
// In such cases, it will set the type to any which disables type checking.

// This behavior can be disabled by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json. 
// That is a JSON config file for customizing how some of TypeScript behaves.

