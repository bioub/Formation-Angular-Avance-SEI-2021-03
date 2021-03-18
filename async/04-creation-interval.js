const { interval } = require("rxjs");

const interval$ = interval(1000);

const subA = interval$.subscribe(
  () => {
    console.log("A next");
  },
  (err) => {},
  () => {
    console.log("A completed");
  }
);

const subB = interval$.subscribe({
  next() {
    console.log("B next");
  },
  complete() {
    console.log("B complete");
  },
});


setTimeout(() => {
    subB.unsubscribe();
}, 4500);