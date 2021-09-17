function callback1(boardId, board, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = board.find((item) => item.id === boardId);
      if (data) {
        resolve(cb(data));
      } else {
        reject(cb(null, "Id Not Found"));
      }
    }, 2 * 1000);
  });
}

module.exports = { callback1 };

// function callback1(boardId, board) {
//   return new Promise((resolve, reject) => {
//     const data = board.find((item) => item.id === boardId);
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Id Not Found");
//     }
//   })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// module.exports = { callback1 };
