// let userPassword = "jqueryismyjam";

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// if (userPassword === "jqueryismyjam") {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (userPassword === "123") {
//   message = ACCESS_DENIED;
// }
// console.log(message);

let userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword === "123") {
  message = ACCESS_DENIED;
}
console.log(message);

userPassword = null;
if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword === "123") {
  message = ACCESS_DENIED;
}
console.log(message);

userPassword = "123";
if (userPassword === "jqueryismyjam") {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword === "123") {
  message = ACCESS_DENIED;
}
console.log(message);
