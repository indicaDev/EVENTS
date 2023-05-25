const { v4 } = require('uuid');

let user = [
  {
    id: v4(),
    name: 'Witally',
    email: 'Witally@',
    password: '1122214',
  },
 
];

class UserRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(user);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(user.find((user) => user.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(user.find((user) => user.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      user = user.filter((user) => user.id !== id);
      resolve();
    });
  }

  create({
    name, email, password,
  }) {
    return new Promise((resolve) => {
      const newUser = {
        id: v4(),
        name,
        email,
        password,
      };

      user.push(newUser);
      resolve(newUser);
    });
  }

  update(id, {
    name, email, password,
  }) {
    return new Promise((resolve) => {
      const updatedUser = {
        id,
        name,
        email,
        password,
      };

      user = user.map((user) => (
        user.id === id ? updatedUser : user
      ));

      resolve(updatedUser);
    });
  }
}

module.exports = new UserRepository();
