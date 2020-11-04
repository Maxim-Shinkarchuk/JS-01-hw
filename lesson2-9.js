function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let isLoginCheck = false;
  if (login.length >= min && login.length <= max) {
    isLoginCheck = true;
  }
  return isLoginCheck;
}
//console.log(isLoginValid("hjhjhj"));

function isLoginUnique(allLogins, login) {
  // Write code under this line
  let checkUniqLogin = true;
  if (allLogins.includes(login)) {
    checkUniqLogin = false;
  }
  return checkUniqLogin;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message = "";
  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  }
  if (isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    message = SUCCESS;
  } else {
    message = REFUSAL;
  }
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(isLoginUnique(logins, "Poly"));

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
//console.log(logins);
