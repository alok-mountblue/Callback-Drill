const { callback4 } = require("../callback4");

const boards = require("../Jdata/boards.json");
const lists = require("../Jdata/lists.json");
const cards = require("../Jdata/cards.json");

callback4(boards, cards, lists);
