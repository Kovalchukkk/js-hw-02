const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  return (login.length >= 4 && login.length <= 16) ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login) ? false : true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      return 'Логін успішно доданий!';
    }
    return 'Такий логін вже використовується!';
    
  }
  return 'Помилка! Логін повинен бути від 4 до 16 символів';
  
};

console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'

