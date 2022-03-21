const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/usersdb', { useUnifiedTopology: true, useNewUrlParser: true }, ()=> console.log("good"));

// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

User.create({
    username: "qwerty123",
    email: "akimin97@mail.ru",
    password: "123123"
}, (err, doc) => {
    mongoose.disconnect();
    
    if(err) return console.log(err);

    console.log("Сохранен объект user", doc);
});