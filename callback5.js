const { callback1 } = require("./callback1");
const { callback2 } = require("./callback2");
const { callback3 } = require("./callback3");

function callback5(boards, cards, lists) {
  setTimeout(() => {
    const Name = ["Mind", "Space"];
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        callback1(board.id, boards, (res, err) => {
          res ? console.log(res) : console.error(err);
          callback2(res.id, lists, (res, err) => {
            res ? console.log(res) : console.error(err);
            Name.forEach((name) => {
              res.find((ele) => {
                if (ele.name === name) {
                  callback3(ele.id, cards, (res) => {
                    res.forEach((element) => {
                      res ? console.log(element) : console.error(err);
                    });
                  });
                }
              });
            });
          });
        });
      }
    });
  }, 2 * 1000);
}

module.exports = { callback5 };
