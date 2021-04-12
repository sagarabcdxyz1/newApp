const db = require("../models"); // models path depend on your structure
const Tutorial = db.tutorials;
const Users = db.Users;

exports.findAll = (req, res) => {
  
  Users.findAll().then(data => {
        res.render('index', { data: data});
      })
  };
