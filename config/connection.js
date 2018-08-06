var mysql = require ("mysql");

//Create the connection.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err){
  if (err) {
      console.log("Error connecting: " + err.stack)
      return;
  }
});

// Export connection for our ORM to use.
module.exports = connection;