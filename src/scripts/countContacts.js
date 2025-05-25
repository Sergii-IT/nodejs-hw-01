import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Кількість контактів: ${contacts.length}`);
};

countContacts();
