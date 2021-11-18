const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
  title:  {type: String, required: [true, 'Pole tytuł jest wyagane']}, // String is shorthand for {type: String}
  description:   {type: String, required: [true, 'Pole opis jest wyagane']},
  created: { type: Date, default: Date.now },
});
module.exports = mongoose.model('News', newsSchema);