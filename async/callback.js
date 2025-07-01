// function greetUser(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }
// function sayBye() {
//   console.log("Goodbye!");
// }
// greetUser("Riona", sayBye);

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside callback");
// }, 2000);

// console.log("End");
function fetchUserData(callback) {
  setTimeout(() => {
    const data = { name: "Sandesh", role: "Student" };
    callback(data); // Call the callback with the data
  }, 1500);
}

console.log("Fetching data...");
fetchUserData((user) => {
  console.log("User fetched:", user);
});
console.log("Waiting...");
