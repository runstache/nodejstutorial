let data = require('./data/data.json');

const handlebarService = require('handlebars');
const fs = require('fs');

fs.readFile('./templates/patient.hbs', 'utf-8', function (err, source) {

  if (err) {
    console.log(`ERROR OCCURRED: ${err}`);
  }

  if (source) {
    var template = handlebarService.compile(source);
    var hydrated = template(data);
    console.log(hydrated);
  } else {
    console.log('TEMPLATE EMPTY');
  }
});


