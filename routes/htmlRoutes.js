// path dependency to denote path to html files
var path = require("path");

module.exports = function(app){
  // /notes brings user to notes page
  app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/api/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // * brings user to home page
  app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};