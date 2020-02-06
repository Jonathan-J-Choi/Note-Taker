// db.json dependency because information is being read/written there via api call
var db = require("../db/db.json");


module.exports = function(app){
  // calls notes from json database
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });
  // places notes into body of request
  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(true);
  });
  // sending file to db.json
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  })
}