const jwt = require('jsonwebtoken');

const privateKey = "oleg123";

let payload = {
    username: "Kirill",
    email: "kirill123@mail.ru",
    password: "123123"
}

const token = jwt.sign(payload, privateKey, {algorithm: "HS384"});
console.log(token);
// const tokenverify = jwt.verify(token, privateKey);
// console.log(tokenverify);
// const dec = jwt.decode(token);
// console.log(dec)