const boards = require("./Jdata/boards.json");
const lists = require("./Jdata/lists.json");
const cards = require("./Jdata/cards.json");

function callback4(callback1, callback2, callback3) {
  setTimeout(() => {
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        callback1(board.id, boards)
          .then((data) => {
            console.log(data);
            return callback2(data.id, lists);
          })
          .then((data) => {
            console.log(data);
            let mind = data.find((ele) => ele.name === "Mind");
            return callback3(mind.id, cards);
          })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, 2 * 1000);
}

module.exports = { callback4 };
