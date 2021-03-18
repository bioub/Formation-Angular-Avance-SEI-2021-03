const { Subject, AsyncSubject, BehaviorSubject } = require("rxjs");
const { alphabet } = require("./alphabet");

const obs$ = alphabet();

const sub$ = new BehaviorSubject();
obs$.subscribe(sub$);

sub$.subscribe((letter) => {
  console.log(1, letter);
});

setTimeout(() => {
  sub$.subscribe((letter) => {
    console.log(2, letter);
  });
}, 3000);
