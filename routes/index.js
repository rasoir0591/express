var express = require("express");
var router = express.Router();
const login = "admin";
const password = "321";

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});
router.post("/login", (req, res) => {
  const body = req.body;
  if (body.login === login && body.password === password) {
    req.session.admin = 1;
  console.log('sesja', req.session.admin);

    res.redirect("/admin");
  }else{
    res.redirect("/login");
  }
  
});
module.exports = router;
