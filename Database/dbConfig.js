const mongoose = require("mongoose");
require('dotenv').config();

const BASE_URL = process.env.URL


mongoose
  .connect(BASE_URL)
  .then((response) => {
    if (response) {
      console.log("DATABASE CONNECTION SUCCESSFULL");
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  })
  .catch((err) => {
    if (err) {
      console.log("ERROR CONNECT DATABASE", err);
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  });
