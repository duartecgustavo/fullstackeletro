const mongoose = require('mongoose');

function mongoConn() {
    mongoose.connect("mongodb://localhost/fullstackeletro",
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB has connected");
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = mongoConn();