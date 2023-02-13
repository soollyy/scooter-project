const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user

const scooterApp = new ScooterApp();

// Test user registration with valid parameters
let user = scooterApp.registerUser("soliana tesema", "password1", 18);
console.log(user instanceof User, "User was not registered");
console.log(scooterApp.registeredUsers["soliana tesema"] === user, "User was not added to registeredUsers");

// Test user registration with existing username
try {
  scooterApp.registerUser("soliana tesema", "password2", 25);
} catch (error) {
  console.log(error.message === "User already registered", "Error message was not correct");
}

// Test user registration with age below 18
try {
  scooterApp.registerUser("sarah john", "password3", 17);
} catch (error) {
  console.log(error.message === "Too young to register", "Error message was not correct");
}


// log in
describe("loginUser", () => {
  let scooterApp, user;

  beforeEach(() => {
    scooterApp = new ScooterApp();
    user = scooterApp.registerUser("username", "password", 18);
  });

  it("should log the user in with correct username and password", () => {
    scooterApp.loginUser("username", "password");
    expect(user.loggedIn).toBe(true);
  });

  it("should throw an error with incorrect username", () => {
    expect(() => scooterApp.loginUser("invalidUsername", "password")).toThrowError("Username or password is incorrect");
  });

  it("should throw an error with incorrect password", () => {
    expect(() => scooterApp.loginUser("username", "invalidPassword")).toThrowError("Username or password is incorrect");
  });
});


// log out

// rent scooter

// dock scooter
