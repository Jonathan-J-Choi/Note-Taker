// Dependencies //
var express = require("express");

// Express application //
var app = express();

// Initial port //
var PORT = process.env.PORT || 8080;

// Express app data parsing //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Router //
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener //
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})