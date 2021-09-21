// Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.

const { callback2 } = require("../callback2");
const lists = require("../Jdata/lists.json");

callback2("mcu453ed", lists);
