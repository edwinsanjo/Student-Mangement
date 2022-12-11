const bcrypt = require("./backend/node_modules/bcrypt")

// verify email
const isEmail = (email) => {
    var emailFormat =
        /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email.match(emailFormat)) return true;
    return false;
};
console.log(isEmail("la;djkgfbnl;a"))


bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("password", salt, (err, hash) => {
        if (err) throw err;
        console.log(hash);

    })
})

bcrypt.compare("password", "$2b$10$2yQJxlsRZv4gYCERzy9yU.g/sJt4EwzQSScws.WQ9POqvIttPpU6O", (e, d) => {
    if (e) return console.log(e);
    if (d) return console.log({ d });
})