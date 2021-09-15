const { callback2 } = require("../callback2");
const lists = require("../Jdata/lists.json");

callback2("mcu453ed", lists, (res, err) => {
  if (res) {
    console.log(res);
  } else {
    console.log(err);
  }
});
