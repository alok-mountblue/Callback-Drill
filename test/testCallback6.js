// Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

//     Get information from the Thanos boards
//     Get all the lists for the Thanos board
//     Get all cards for all lists simultaneously

const { callback1 } = require("../callback1");
const { callback2 } = require("../callback2");
const { callback3 } = require("../callback3");
const { callback6 } = require("../callback6");

callback6(callback1, callback2, callback3);
