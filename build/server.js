'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _Reflection = require('./src/usingJSObject/controllers/Reflection');

var _Reflection2 = _interopRequireDefault(_Reflection);

var _Reflection3 = require('./src/usingDB/controller/Reflection');

var _Reflection4 = _interopRequireDefault(_Reflection3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config(); //server.js
// "test": "echo \"Error: no test specified\" && exit 1 mocha",
// server.js

var Reflection = process.env.TYPE === 'db' ? _Reflection4.default : _Reflection2.default;
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

// import Reflection from './src/controllers/Reflection';
app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

app.listen(3000);
console.log('app running on port ', 3000);