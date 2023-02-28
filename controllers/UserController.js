const User = require('../models/User');

module.exports.createUser = (req,res) =>{
    const {body} = req;
    const user = new User(body);
    console.log(user);
    user.addUser();
    delete user.password;
    res.send(user);
}
module.exports.getUser = (req, res)=>{
    const {userId} = req.params;
    console.log(userId);
    const user = User.findOne(Number(userId));
    console.log(user);
    res.send(user);
}
module.exports.deleteU = (req, res) => {
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    if(user){
        user.deleteUser();
        res.status(200).end();
    } else{
        res.status(404).end();
    }
}
module.exports.updateUser = (req,res) => {
    const {userId} = req.params;
    const user = User.findOne(Number(userId));
    const result = user.updateUser(req.body);
    res.send();
}