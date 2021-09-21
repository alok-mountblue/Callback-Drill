// Problem 1: Write a function that will return a particular board's information based on the boardID
// that is passed from the given list of boards in boards.json and then pass control back to the code
// that called it by using a callback function.

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
