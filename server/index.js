require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routers');
const _app_folder = 'server/dist/my-dream-app';
const passport = require('./auth').passport;


let PORT = process.env.PORT || 4100;

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(cors());


app.use('/api/product',  routes.productRouter);
app.use('/api/user',  routes.userRouter);
app.use('/api/authorization', routes.authorizationRouter);

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, { maxAge: '1y' }));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: _app_folder });
});

//startGenerateRanking(3600000);

app.use(function (err, req, res, next) {
  console.log(err);
});

// ---- START UP THE NODE SERVER  ----
app.listen(PORT, function () {
  console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + PORT);
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
