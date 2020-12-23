import express from 'express';
import parser from 'body-parser';
import projectRouter from './routes';
const db = require('./database/db.js');

const app = express();
app.use(parser.json());

app.use('/', projectRouter);

app.set('port', 2000);
app.listen(app.get('port'), (err?: Error) => {
  if (err) {
    console.log('error connecting to server');
  } else {
    console.log(`>>> Listening on port ${app.get('port')} <<<`);
  }
});
