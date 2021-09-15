function callback2(listId, lists, cb) {
  setTimeout(() => {
    let res;
    for (const id in lists) {
      if (id === listId) {
        res = lists[id];
        break;
      }
    }
    if (res) {
      cb(res);
    } else {
      cb(res, "Data Not Found");
    }
  }, 2 * 1000);
}

module.exports = { callback2 };
