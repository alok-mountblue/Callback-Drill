function callback1(boardId, board) {
  return new Promise((resolve, reject) => {
    const data = board.find((item) => item.id === boardId);
    if (data) {
      resolve(data);
    } else {
      reject("Id Not Found");
    }
  });
}

module.exports = { callback1 };
