function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = result * x;
    }
    return result;
}

// Функція з використанням промта для запиту числа у юзера
function askForNumber(message) {
    let value;
    do {
        value = prompt(message);
    } while (value === "" || value === null);
    return value * 1; // використовуємо для автоматичного перетворення строки в число
}

// Отримуємо дані від юзера
let base = askForNumber("Ввдіть число, яке ви хочете привести в ступіть:");
let exponent = askForNumber("Введи ступінь:");

// Виводимо результат
let result = pow(base, exponent);
console.log("Результат:", result);