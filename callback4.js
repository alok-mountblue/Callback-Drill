const boards = require("./Jdata/boards.json");
const lists = require("./Jdata/lists.json");
const cards = require("./Jdata/cards.json");

function callback4(callback1, callback2, callback3) {
  setTimeout(() => {
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        callback1(board.id, boards, (res, err) => {
          res ? console.log(res) : console.error(err);
          callback2(res.id, lists, (res, err) => {
            res ? console.log(res) : console.error(err);
            let mind = res.find((ele) => ele.name === "Mind");
            callback3(mind.id, cards, (res, err) => {
              res ? console.log(res) : console.error(err);
            });
          });
        });
      }
    });
  }, 2 * 1000);
}

module.exports = { callback4 };
