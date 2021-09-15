const boards = require("../Jdata/boards.json");
const lists = require("../Jdata/lists.json");
const cards = require("../Jdata/cards.json");
const { callback5 } = require("../callback5");

callback5(boards, cards, lists);
