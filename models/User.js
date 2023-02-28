const db = new Map();

module.exports = class User {
    constructor({firstName,lastName,email,password}){
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = password,
        this.id = db.size + 1
    }
    

    addUser(){
        db.set(this.id, this)
    }

    static findOne(userId){
        return db.get(userId);
    }

    static findAll(){
        return [...db.values()];
    }

    deleteUser(){
        return db.delete(this.id)
    }
    updateUser(data){
        return db.set(this.id, {...this, ...data});   
    }
}
