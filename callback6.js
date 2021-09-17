const boards = require("./Jdata/boards.json");
const lists = require("./Jdata/lists.json");
const cards = require("./Jdata/cards.json");

function callback6(callback1, callback2, callback3) {
  setTimeout(() => {
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        callback1(board.id, boards)
          .then((res) => {
            console.log(res);
            return callback2(res.id, lists);
          })
          .then((res) => {
            console.log(res);
            res.find((ele) => {
              callback3(ele.id, cards).then((res) => {
                console.log(res);
              });
            });
          });
      }
    });
  }, 2 * 1000);
}

module.exports = { callback6 };
