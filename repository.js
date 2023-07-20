const sqlite3 = require('sqlite3');

class Repository {
  delete(id){
    console.log(`Delete ${id}`);
  }

  getById(id){
    console.log(`Get item by id ${id}`);
  }

  create(item){
    console.log(item);
    const db = new sqlite3.Database(
      "mydatabase.db",
      (err) => {
        if (err){
          console.log(err.message);
          return -1;
        }
        console.log('connection is open');
        db.run(`INSERT INTO item (name, description) VALUES("${item.name}", "${item.description}")`, (err) => {
          if (err){
            console.log(err.message);
            return -2;
          }
          return this.lastID;
        });
      }
    );
    return 0;
  }
}



module.exports = Repository;
