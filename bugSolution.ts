function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate over the array and call greeter for each element
user.forEach(name => console.log(greeter(name)));

// Solution 2: Join the array elements into a single string before passing to greeter
let userName = user.join(" ");
console.log(greeter(userName));

// Solution 3: Modify the function to accept an array of strings
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}

console.log(greeterArray(user));