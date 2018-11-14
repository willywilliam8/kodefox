function checkPassword(password) {
  let counterLower = 0;
  let counterUpper = 0;
  if (password.length < 6) {
    return {success: false, reason: 'password too short.'};
  } else {
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= 'a' && password[i] <= 'z') {
        counterLower++;
      }
      if (password[i] >= 'A' && password[i] <= 'Z') {
        counterUpper++;
      }
    }
    if (counterLower < 1) {
      return {success: false, reason: 'You need at least 1 lowercase.'};
    } else if (counterUpper < 1) {
      return {success: false, reason: 'You need at least 1 uppercase.'};
    } else {
      return {success: true, reason: 'Password fulfill the requirement.'};
    }
  }
}

console.log(checkPassword('A234a56'));
