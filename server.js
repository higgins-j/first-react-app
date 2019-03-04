import Express from 'express';
const server = Express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

server.use(Express.static('public'));
server.listen(8080, () => {
  console.info('Listening on port 8080...');
});
