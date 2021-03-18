const { Subject } = require("rxjs");
const { alphabet } = require("./alphabet");

const obs$ = alphabet();

obs$.subscribe(sub$);

const sub$ = new Subject();

sub$.subscribe((letter) => {
        console.log(1, letter);
    });

  setTimeout(() => {
    sub$.subscribe((letter) => {
        console.log(2, letter);
    });
  }, 1050);