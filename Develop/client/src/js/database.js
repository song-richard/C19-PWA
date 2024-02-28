import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database

//Provides content to db after initializing to handle errors
export const putDb = async (content) => {
  try {
    const db = await initdb();
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    await store.put({ content });
    await tx.done;
    console.log('Content added to the database');
  } catch (error) {
    console.error('Error adding content to the database:', error);
  }
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
