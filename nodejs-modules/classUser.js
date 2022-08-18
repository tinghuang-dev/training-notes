// It is more common to use module.exports when you want to export a single class

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserStates() {
    return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        `;
  }
}

module.exports = User;
