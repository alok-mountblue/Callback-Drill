// Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

// Get information from the Thanos boards
// Get all the lists for the Thanos board
// Get all cards for the Mind and Space lists simultaneously

const boards = require("../Jdata/boards.json");
const lists = require("../Jdata/lists.json");
const cards = require("../Jdata/cards.json");
const { callback5 } = require("../callback5");

callback5(boards, cards, lists);
