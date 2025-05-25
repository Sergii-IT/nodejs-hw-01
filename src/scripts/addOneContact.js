import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'; // або відповідний шлях до функції

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();

    const updatedContacts = [...contacts, newContact];
    await writeContacts(updatedContacts);

    console.log('✅ One contact added successfully.');
  } catch (error) {
    console.error('❌ Failed to add one contact:', error.message);
  }
};

// Виклик функції при запуску скрипта
addOneContact();
