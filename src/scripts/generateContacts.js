import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts(); // зчитуємо існуючі контакти
    const newContacts = [];

    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts); // записуємо оновлені контакти

    console.log(`${number} контакт(ів) успішно додано.`);
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error.message);
  }
};

// Отримати кількість з аргументів командного рядка
const countArg = process.argv[2];
const number = Number(countArg);

// Перевірка на коректне число
if (Number.isNaN(number) || number <= 0) {
  console.error('Будь ласка, передайте коректну кількість контактів. Наприклад: npm run generate 5');
  process.exit(1);
}

// Виклик функції
generateContacts(number);
