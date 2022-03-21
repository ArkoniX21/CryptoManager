const express = require("express");
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = 3000;
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/usersdb', { useUnifiedTopology: true, useNewUrlParser: true }, 
()=> console.log("Connection to mongodb to be successful"));

function createUser(username, email, password) {
    User.create({
        username,
        email,
        password
    }, (err, doc) => {
        mongoose.disconnect();
        
        if(err) return console.log(err);
    
        console.log("Сохранен объект user", doc);
    });
}

app.get('/api/users', (req, res) => {
    User.find({}, (err, docs) => {
        if(err) return console.log(err);
        res.send(docs);
    });
});

app.post('/api/user', (req, res) => {
    let data = req.body.data;
    createUser(data.username, data.email, data.password);
    res.send("HEllo")
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});