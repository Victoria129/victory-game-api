const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(
  "mydatabase.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the SQLite database.");
      db.run('CREATE TABLE IF NOT EXISTS item (id integer primary key, name varchar(50), description varchar(100));', (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('table created!');
          // INSERT INTO item (name, description) VALUES ("bottle", "green");
          db.run('INSERT INTO item (name, description) VALUES ("bottle", "green")', (err) => {
            if (err) {
              console.log(err.message);
            }
          });
        }
      });

    }
  }
);

// table = item
// id
// name
// description

/*
CREATE TABLE item (
  id integer primary key,
  name varchar(50),
  description varchar(100)
);
*/