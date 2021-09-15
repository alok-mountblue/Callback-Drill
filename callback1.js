function callback1(boardId, board, cb) {
  setTimeout(() => {
    const data = board.find((item) => item.id === boardId);
    if (data) {
      cb(data);
    } else {
      cb(null, "Id Not Found");
    }
  }, 2 * 1000);
}

module.exports = { callback1 };
