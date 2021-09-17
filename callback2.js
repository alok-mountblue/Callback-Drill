function callback2(listId, lists) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res;
      for (const id in lists) {
        if (id === listId) {
          res = lists[id];
          break;
        }
      }
      if (res) {
        resolve(res);
      } else {
        reject("Data Not Found");
      }
    }, 2 * 1000);
  });
}

module.exports = { callback2 };
