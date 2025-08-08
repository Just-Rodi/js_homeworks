"use strict"

function checkProbabilityTheory(count) {
  // 1) Базова перевірка на число (ми ж QA :) )
  if (!Number.isInteger(count) || count <= 0) {
    console.log('Помилка: count має бути додатним цілим числом.');
    return;
  }

  let even = 0;
  let odd = 0;

  // 2) Генеруємо count цілих чисел в діапазоні [100...1000] і рахуємо парні/непарні
  for (let i = 0; i < count; i++) {
    const n = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // 100..1000 включно
    if (n % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  // 3) Відсотки (округлимо до 2 знаків)
 const evenPercent = Math.round((even / count) * 100 * 100) / 100;
 const oddPercent  = Math.round((odd  / count) * 100 * 100) / 100;

  // 4) «Наскільки близько до 50/50» (Різниця від 50% для парних)
  const diffFrom5050 = Math.round(Math.abs(evenPercent - 50) * 100) / 100;

  // 5) Додатково: відсоток парних до непарних (захист від ділення на 0)
let evenToOddPercent = '—';
if (odd !== 0) {
  const diffPercent = Math.round(((even - odd) / odd) * 100 * 100) / 100;
  if (diffPercent > 0) {
    evenToOddPercent = `Парних більше на ${diffPercent}%`;
  } else if (diffPercent < 0) {
    evenToOddPercent = `Непарних більше на ${Math.abs(diffPercent)}%`;
  } else {
    evenToOddPercent = 'Кількість парних та непарних однакова';
  }
}

  // 6) Виводимо все разом
  console.log('Кількість згенерованих чисел:', count);
  console.log('Парних чисел:', even);
  console.log('Непарних чисел:', odd);
  console.log('Відсоток парних:', evenPercent + '%');
  console.log('Відсоток непарних:', oddPercent + '%');
  console.log('Відсоток парних до непарних:', evenToOddPercent);
  console.log('Наскільки близько до 50/50 (відхилення):', diffFrom5050 + '%');

}

// Приклад запуску:
checkProbabilityTheory(100);