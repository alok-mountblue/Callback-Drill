function callback3(cardId, cards) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result;
      for (const id in cards) {
        if (id == cardId) {
          result = cards[id];
          break;
        }
      }
      if (result) {
        resolve(result);
      } else {
        reject(" ");
      }
    }, 2 * 1000);
  });
}

module.exports = { callback3 };
