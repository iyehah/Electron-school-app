const database = require('./js/database');
window.onload = function() {
  // Populate the table
      populateTable();
  // Update the update button click event
  document.getElementById('updateP').addEventListener('click', () => {
    // Retrieve the input fields
    var idToUpdate = document.getElementById('IDx').innerHTML;
    var newPrice = document.getElementById('newPrice');
    var newMonth = new Date().toLocaleString();
    // Update only the price of the person in the database
    database.updatePersonPrice(idToUpdate, newPrice.value , newMonth);
    closeEditPrice()
    // Reset the input fields
    idToUpdate.value = '';
    newPrice.value = '0';
    // Repopulate the table
    populateTable();
  });
  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {
    // Retrieve the input fields
    var code = document.getElementById('code');
    var name = document.getElementById('name');
    var level = document.getElementById('level');
    var date = document.getElementById('date');
    var price = document.getElementById('price');
    var newMonth = new Date().toLocaleString();
  // var N_M = document.getElementById('time').innerHTML = newMonth ;
   // Save the person in the database
   database.addPerson(code.value , name.value, level.value ,date.value , price.value , newMonth);
   // Reset the input fields
   code.value = '';
   name.value = '';
  //  level.value = '';
   date.value = '';
   price.value = '';
  // Repopulate the table
    populateTable();
  });
};
// Populates the persons table
function populateTable() {
  // Retrieve the persons
  database.getPersons(function(persons) {
    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].code + '</td>';
      tableBody += '  <td>' + persons[i].name + '</td>';
      tableBody += '  <td id="levelFiler">' + persons[i].level + '</td>';
      tableBody += '  <td>' + persons[i].date + '</td>';
      tableBody += '  <td>' + persons[i].newMonth + '</td>';
      tableBody += '  <td>' + persons[i].price + '</td>';
      tableBody += '  <td><button class="delete" onclick="deletePerson(\'' + persons[i]._id + '\')"><i class="icon-trash delete-icon"></i></button><button class="delete" onclick="edit(\'' + persons[i]._id +'\',\''+ persons[i].name + '\',\''+ persons[i].price + '\',\''+ persons[i].level +'\')"><i class="icon-check-square delete-icon"></i></button></td>'
      tableBody += '</tr>';
    }
    if (persons.length < 1) {
      document.getElementById('dataNul').innerHTML = 'There are no people register' ;
    }
    var cunt = persons.length ;
    if (cunt == 0) {
      document.getElementById('cunt').innerHTML = 'Cunt Student : '+ cunt;
    }else{
      document.getElementById('cunt').innerHTML = cunt +' '+ 'Student';
    }
    var res = persons.reduce((total , person) => total + Number(person.price), 0);
    if (cunt == 0) {
      document.getElementById('res').innerHTML = 'Total registered students : '+ res;
    }else{
      document.getElementById('res').innerHTML = res +' '+ 'UMR';
    }
    // SElect count of the level student
    document.getElementById('selectLevel').addEventListener('change', () => {
      var selectLevel = document.getElementById('selectLevel').value;
      var selectLevel = document.getElementById('selectLevel').value;
      var countLevel = document.getElementById('countLevel').innerHTML = persons.filter(person => person.level === selectLevel).length + '  Person';
    });
      // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
    // document.getElementById('res').innerHTML = persons.length;
  });
};
// Deletes a person
function deletePerson(id) {
  // Delete the person from the database
  database.deletePerson(id);
  // Repopulate the table
  populateTable();
}
function edit(id , name , oldPrice , level){
  var newMonth = new Date().toLocaleDateString();
  var N_M = document.getElementById('time').innerHTML = newMonth ;
  var IDx = document.getElementById('IDx').innerHTML = id;
  var N_S = document.getElementById('nameStudent').innerHTML = name;
  var O_P = document.getElementById('oldPrice').innerHTML = oldPrice;
  var L_S = document.getElementById('levelStudent').innerHTML = level;
  var thisCode = document.getElementById('codeStudent').innerHTML = id;

  openEditPrice()
}
// function update(){
//   var newPrice = document.getElementById('newPrice');
//   newPrice.value = id;
// }