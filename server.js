//server.js
  // "test": "echo \"Error: no test specified\" && exit 1 mocha",
// server.js

import dotenv from 'dotenv';
import express from 'express';
import 'babel-polyfill';
import ReflectionWithJsObject from './src/usingJSObject/controllers/Reflection';
// import ReflectionWithDB from './src/usingDB/controller/Reflection';

dotenv.config();
const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});


// import Reflection from './src/controllers/Reflection';
app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);

app.listen(3000)
console.log('app running on port ', 3000)


