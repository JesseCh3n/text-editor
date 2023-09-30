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

export const postDb = async (content) => {
  console.log('POST to the database'); 
  
  const jakeDb = await openDB('jake', 1);

  const tx = jakeDb.transaction('jake', 'readwrite');

  const store = tx.objectStore('jake');

  const request = store.add({ jake: content });
  
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database'); 
  
  const jakeDb = await openDB('jake', 1);

  const tx = jakeDb.transaction('jake', 'readwrite');

  const store = tx.objectStore('jake');

  const request = store.put({ id: id, jake: content });

  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  const jaketDb = await openDB('jake', 1);

  const tx = jaketDb.transaction('jake', 'readonly');

  const store = tx.objectStore('jake');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
