function solve(pass) {
  let flag = true;
  let digitCounter = 0;
  let secondFlag = true;

  if (pass.length >= 6 && pass.length <= 10) {
    flag = true;
  } else {
    console.log(`Password must be between 6 and 10 characters`);
    flag = false;
  }

  for (let i = 0; i < pass.length; i++) {
    let curent = pass.charCodeAt(i);
    if (curent >= 48 && curent <= 57) {
      if (curent >= 48 && curent <= 57) {
        digitCounter++;
      }
    } else if (curent >= 65 && curent <= 90) {
      if (curent >= 48 && curent <= 57) {
        digitCounter++;
      }
    } else if (curent >= 97 && curent <= 122) {
      if (curent >= 48 && curent <= 57) {
        digitCounter++;
      }
    } else {
      secondFlag = false;
    }
  }

  if (!secondFlag) {
    console.log("Password must consist only of letters and digits");
  }
  if (digitCounter >= 2) {
    flag = secondFlag;
  } else {
    console.log("Password must have at least 2 digits");
    flag = false;
  }

  if (flag) {
    console.log(`Password is valid`);
  }
}
solve(`$$$123`);
