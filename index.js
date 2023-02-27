const express = require('express');
const {validateUser} = require('./midllewares/index');
const {createUser, getUser, deleteU} = require('./controllers/UserController');
const app = express();
const PORT = 3000;

const bodyParser = express.json();
app.post('/user', bodyParser, validateUser,createUser);

app.get('/user/:userId', getUser);

app.delete('/user/:userId', deleteU);

app.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}`);
})