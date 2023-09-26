const app = require('./app');

app.set('port', process.env.PORT || 3010);

const server = app.listen(app.get('port'), () => {
  console.log('Server Start');
});
