const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      station1: [],
      station2: [],
      station3: [], 
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (!this.registeredUsers[username] && age >= 18) {
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;
      console.log(`User ${username} has been registered`);
      return user;
    } else if (this.registeredUsers[username]) {
      throw new Error("User already registered");
    } else {
      throw new Error("Too young to register");
    }
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (user) {
      user.login(password);
      console.log(`User ${username} has been logged in`);
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (user){
      user.logout(password)
      console.log(`User ${username} has logged in`);
    } else {
      throw new Error("Username or password is incorrect");
    }
  }
}


     

module.exports = ScooterApp
