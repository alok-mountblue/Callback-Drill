function callback3(cardId, cards, cb) {
  setTimeout(() => {
    let result;
    for (const id in cards) {
      if (id == cardId) {
        result = cards[id];
        break;
      }
    }
    if (result) {
      cb(result);
    } else {
      cb(null, "Data Not Found");
    }
  }, 2 * 1000);
}

module.exports = { callback3 };
