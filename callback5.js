const { callback1 } = require("./callback1");
const { callback2 } = require("./callback2");
const { callback3 } = require("./callback3");

function callback5(boards, cards, lists) {
  setTimeout(() => {
    const Name = ["Mind", "Space"];
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        callback1(board.id, boards)
          .then((res) => {
            console.log(res);
            return callback2(res.id, lists);
          })
          .then((res) => {
            console.log(res);
            Name.forEach((name) => {
              res.find((ele) => {
                if (ele.name === name) {
                  callback3(ele.id, cards).then((res) => {
                    res.forEach((ele) => {
                      console.log(ele);
                    });
                  });
                }
              });
            });
          });
      }
    });
  }, 2 * 1000);
}

module.exports = { callback5 };
