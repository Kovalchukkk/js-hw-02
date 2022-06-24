let input;
const numbers = [];
let total = 0;

do {
    input = prompt(`Введіть число`);
    Number.isNaN(Number(input)) ? alert(`Було введено не число, спробуйте ще раз`) : numbers.push(Number(input));
} while (input !== null);

if (numbers.length !== 0) {
  for (const item of numbers) {
    total += item;
}
}

console.log(`Загальна сума чисел дорівнює ${total}`);
