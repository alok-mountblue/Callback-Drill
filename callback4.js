const { callback1 } = require("./callback1");
const { callback2 } = require("./callback2");
const { callback3 } = require("./callback3");

function callback4(boards, cards, lists) {
  setTimeout(() => {
    boards.forEach((board) => {
      if (board.name === "Thanos") {
        let temBoard = [];
        temBoard.push(board);
        callback1(board.id, temBoard, (res) => {
          let temData = [];
          console.log(res);
          temData.push(res);
          temData.find((data) => {
            callback2(data.id, lists, (res) => {
              console.log(res);
              res.find((dataName) => {
                if (dataName.name === "Mind") {
                  callback3(dataName.id, cards, (res) => {
                    res.forEach((tData) => {
                      console.log(tData);
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

module.exports = { callback4 };