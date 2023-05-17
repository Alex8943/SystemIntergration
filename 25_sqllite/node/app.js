import db from './database/connection.js';

db.exec("CREATE TABLE IF NOT EXISTS movies (title, year, score")

db.run("INSERT INTO movies (title, year, score) VALUES (?, ?, ?)", ['Alien', 1979, 8.4])
db.run("INSERT INTO movies (title, year, score) VALUES (?, ?, ?)", ['Aliens', 1986, 8.7])

const movies = db.prepare("SELECT * FROM movies"); 

console.log(movies)