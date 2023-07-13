const Express = require('express');
const Repository = require('./repository');

const app = Express();
const repository = new Repository();
app.use(Express.json());

app.get('/api/items', (request, response) => {
  console.log('Display location');
  response.json({name: 'Victoria'});
});

app.get('/api/items/view/:id', (request, response) => {
  console.log('request made to display location by id');
  const id = request.params.id;
  console.log(`id: ${id}`);
  response.json({name: 'Alex'});
});

app.delete('/api/items/delete/:id', (request, response) => {
  const id = request.params.id;
  repository.delete(id);
  // console.log(`request to delete id: ${id}`);
  response.json({id: id});
});

app.post('/api/items/create/', (request, response) => {
  console.log(request.body);
  repository.create(request.body);
  // response.json({status: 'everything is okay'});
  response.redirect('/api/items/view/22');
});

app.listen(8080, () => {
  console.log('My API is ready!');
});
