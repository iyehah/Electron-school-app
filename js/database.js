// Initialize the database
var Datastore = require('nedb');
db = new Datastore({ filename: 'db/persons.db', autoload: true });
// Adds a person
exports.addPerson = function(code, name, level, date, price , newMonth) {
  // Create the person object
  var person = {
    "code":code,
    "name": name,
    "level": level,
    "date":date,
    "price":price,
    "newMonth":newMonth
  };
  // Save the person to the database
  db.insert(person, function(err, newDoc) {
    // Do nothing
  });
};
// Returns all persons
exports.getPersons = function(fnc) {
  // Get all persons from the database
  db.find({}, function(err, docs) {
    // Execute the parameter function
    fnc(docs);
  });
}
// Deletes a person
exports.deletePerson = function(id) {
  db.remove({ _id: id }, {}, function(err, numRemoved) {
    // Do nothing
  });
}
exports.updatePersonPrice = function(id, newPrice ,newMonth) {
  db.update({ _id: id }, {
    $set: {
      price: newPrice,
      newMonth:newMonth
    }
  }, {}, function(err, numReplaced) {
    // Do nothing
  });
}

