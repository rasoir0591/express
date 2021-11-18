const uri = process.env.MONGODB_URI;
module.exports = {
<<<<<<< HEAD
  db: "",
=======
  db: uri,
>>>>>>> 16c2875 (fix: refactor hard coded connection string to Heroku config var)
  keySession: ["TWOJKLUCZ", "TWOJKLUCZ2"],
  maxAgeSession: 24 * 60 * 60 * 1000,
};
