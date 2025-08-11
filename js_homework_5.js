"use strict"

var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        var sum = 0;
        for (var key in this) {
            if (typeof this[key] === "string") {
                var number = parseInt(this[key]); // Перетворюємо "60 грн" - строку в 60 - число
                sum = sum + number;
            }
        }
        return sum + " грн";
    },

    minPrice: function() {
        var min = null;
        for (var key in this) {
            if (typeof this[key] === "string") {
                var number = parseInt(this[key]);
                if (min === null || number < min) {
                    min = number;
                }
            }
        }
        return min + " грн";
    },

    maxPrice: function() {
        var max = 0;
        for (var key in this) {
            if (typeof this[key] === "string") {
                var number = parseInt(this[key]);
                if (number > max) {
                    max = number;
                }
            }
        }
        return max + " грн";
    }
};

// Додаємо послугу
services["Розбити скло"] = "200 грн";

// Перевірка
console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());