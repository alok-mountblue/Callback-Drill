const { callback3 } = require("../callback3");
const cards = require("../Jdata/cards.json");

const cb = (res, error) => {
  if (res) {
    console.log(res);
  } else {
    console.log(error);
  }
};

callback3("qwsa221", cards, cb);
