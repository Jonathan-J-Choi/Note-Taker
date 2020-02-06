// FS to write into database
var fs = require("fs");

// constructor for new json
class Notes{
  constructor(title, content, id){
      this.title = title;
      this.content = content;
      this.id = id;
  }
  getTitle(){
      return this.title;
  }
  getContent(){
      return this.content;
  }
  getID(){
      return this.id;
  }
}

// Code here to pull from active note and assign id number via constructor.

// Code to push into database via fs.

// Code should be able to delete/view notes due to them now having id numbers.