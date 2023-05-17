import sqlite from 'sqlite3';
import { open } from 'sqlite';


const connection = await open({
    filename: './database.db',
    driver: sqlite.Database
});

export default connection;