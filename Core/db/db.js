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
  createUser: function(db, username, password) {
    let sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
    db.run(sql, [username, password]);
    console.log('User Created!');
  },
  createReport: function(
    db,
    report_type,
    report_name,
    report_desc,
    platform,
    submitted_by,
    date_added
  ) {
    let sql = `INSERT INTO reports (report_type, report_name, report_desc, platform, submitted_by, date_added) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(sql, [
      report_type,
      report_name,
      report_desc,
      platform,
      submitted_by,
      date_added
    ]);
    console.log('Report Logged!');
  },
  loginUser: function(db, username, password) {
    let checkForUserSQL = `SELECT * FROM users WHERE username = "${username}"`;
    let loginSuccess = null;
    let passMatch = null;
    let userMatch = null;
    let data = [];
    db.all(checkForUserSQL, [], (err, rows) => {
      data.push(rows);
      return data;
    });
    // console.log(data);
    return data;
  },
  queryReports: function(db, report_type) {
    let qdata = [];
    db.serialize(() => {
      let respond = true;
      let sql = `SELECT * FROM reports WHERE report_type = '${report_type}' ORDER BY date_added`;
      db.all(sql, [], (err, rows) => {
        rows.forEach(row => {
          qdata.push(row);
        });
        return qdata;
      });
      return qdata;
    });
    return qdata;
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
