let sqlite3 = require('sqlite3').verbose();

module.exports = {
  initDb: function() {
    let db = new sqlite3.Database('./db/ktracker.db', err => {
      if (err) {
        console.log(err.message);
      }
      console.log('Connected to the ktracker database!');
    });
    return db;
  },

  terminateDb: function(db) {
    db.close(err => {
      if (err) {
        console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  }
};
