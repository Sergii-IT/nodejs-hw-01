import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Немає контактів для видалення.');
    return;
  }

  contacts.pop(); // Видаляємо останній елемент
  await writeContacts(contacts);
  console.log('Останній контакт видалено.');
};

removeLastContact();
