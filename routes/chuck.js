const router = require("express").Router();
const axios = require("axios");

router.route("/chuck").get((req, res) => {
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((joke) => res.json(joke.data.value));
});

module.exports = router;
