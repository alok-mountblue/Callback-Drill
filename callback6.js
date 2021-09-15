const boards = require("./Jdata/boards.json");
const lists = require("./Jdata/lists.json");
const cards = require("./Jdata/cards.json");

function callback6(callback1, callback2, callback3) {
  setTimeout(() => {
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        callback1(board.id, boards, (res, err) => {
          res ? console.log(res) : console.error(err);
          callback2(res.id, lists, (res, err) => {
            res ? console.log(res) : console.error(err);
            res.find((ele) => {
              callback3(ele.id, cards, (res) => {
                console.log(res);
              });
            });
          });
        });
      }
    });
  }, 2 * 1000);
}

module.exports = { callback6 };
