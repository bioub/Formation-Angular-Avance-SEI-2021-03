const { from } = require("rxjs");

const val = [1, 2, 3];

from(val)
  .subscribe((v) => {
    console.log(v);
  })