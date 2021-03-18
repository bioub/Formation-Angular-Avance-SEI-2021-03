const { Subject, AsyncSubject, BehaviorSubject, ReplaySubject } = require("rxjs");
const { shareReplay } = require("rxjs/operators");
const { alphabet } = require("./alphabet");

const obs$ = alphabet();
const sub$ = new ReplaySubject(1);
obs$.subscribe(sub$);

// const sub$ = alphabet()
//   .pipe(
//     shareReplay(1),
//   );

sub$.subscribe((letter) => {
  console.log(1, letter);
});

setTimeout(() => {
  sub$.subscribe((letter) => {
    console.log(2, letter);
  });
}, 3000);


// ----1------------2---
// ---------{id: 1}------{id:2}

//       ^--{id: 1}----
//                       
//                   ^{id: 1}----