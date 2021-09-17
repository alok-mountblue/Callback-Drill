const { callback1 } = require("../callback1");
const board = require("../Jdata/boards.json");

function cb(res, err) {
  if (res) {
    console.log(res);
  } else {
    console.log(err);
  }
}

callback1("abc122dc", board, cb);
