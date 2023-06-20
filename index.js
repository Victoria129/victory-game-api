const Express = require('express');

const app = Express();

app.get('/api/items', (request, response) => {
  console.log('Display location');
  response.json({name: 'Victoria'});
});

app.listen(8080, () => {
  console.log('My API is ready!');
});
