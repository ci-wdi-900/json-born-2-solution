const fs = require('fs')


const getUser = (i) => {
  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }
    const users = JSON.parse(data);
    console.log(users.find((user) => user.index === i));
  });
}


module.exports = getUser;