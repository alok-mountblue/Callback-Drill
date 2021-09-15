const { callback1 } = require("../callback1");
const { callback2 } = require("../callback2");
const { callback3 } = require("../callback3");
const { callback4 } = require("../callback4");

callback4(callback1, callback2, callback3);
