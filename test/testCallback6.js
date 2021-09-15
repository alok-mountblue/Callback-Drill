const { callback6 } = require("../callback6");

const boards = require("../Jdata/boards.json");
const lists = require("../Jdata/lists.json");
const cards = require("../Jdata/cards.json");

callback6(boards, cards, lists);
