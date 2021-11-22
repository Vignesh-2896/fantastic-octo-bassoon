var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hello There!",
    user: "Obi Wan Kenobi",
    added: new Date()
  },
  {
    text: "We'll just use the Force !",
    user: "FN-2187",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Borad', messages: messages });
});

router.get("/new",function(req,res,next) {
  res.render("form",{title:"Add a New Message"})
});

router.post("/new",function(req,res,next) {
  messages.push({text:req.body.message_content, user:req.body.message_user, added: new Date()})
  res.redirect("/")
});

module.exports = router;
