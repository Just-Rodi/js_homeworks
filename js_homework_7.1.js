"use strict"

var arr = [
  { userName: "Test",    
    lastName: "Test",    
    email: "test.test@gmail.com" 
  },
  { userName: "Dmitro",  
    lastName: "Porohov", 
    email: "dmitro.porohov@yahoo.com" 
  },
  { userName: "Andrii",  
    lastName: "",
    email: "andrii@mail.ru" 
  },
];

const emailRE = /^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)?@(gmail\.com|yahoo\.com)$/i; // Регулярка для фільтрації email-ів


let trusted = []; // В цей массив будемо збирати "гідні довіри" email-и

for (let i = 0; i < arr.length; i++) {
  let user = arr[i];              // Дістаємо обєкт 
  let email = user.email;         // Беремо email
  if (emailRE.test(email)) {      // Перевіряємо його регуляркою
    trusted.push(user);           // Якщо він нас задовольняє то додаємо в новий массив
  }
}

console.log(trusted);
