import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function initializeDB() {
  const db = await open({
    filename: 'notes.db',
    driver: sqlite3.Database
  });

  await db.exec(
    `CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY,
      title TEXT,
      rawTranscription TEXT,
      multiSpeakerTranscription TEXT,
      timestamp INTEGER,
      audioUrl TEXT,
      audioFileName TEXT,
      medTopicEnabled INTEGER,
      medTopicContextUsed TEXT,
      medTopicUploadedFileName TEXT,
      medTopicTextInputContent TEXT
    )`
  );

  return db;
}

export default initializeDB;
