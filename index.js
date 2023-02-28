const express = require('express');
const {validateUser} = require('./midllewares/index');
const {createUser, getUser, deleteU, updateUser} = require('./controllers/UserController');
const app = express();
const PORT = 3000;

const bodyParser = express.json();
app.post('/user', bodyParser, validateUser,createUser);

app.get('/user/:userId', getUser);

app.delete('/user/:userId', deleteU);

app.put('/user/:userId',bodyParser, updateUser);

app.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}`);
})