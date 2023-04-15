/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(usernames) {
  // const username = usernames.split(" ");
  // const regex = /^(\w+{5, })$/g;
  // return regex.test(username);
  for (let username of usernames) {
    if (username.length < 5) {
      return false;
    }
  }
  return true;
}

module.exports = checkUsernames;
