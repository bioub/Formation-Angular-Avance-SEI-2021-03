const { of } = require("rxjs");

const val = 'Hello';

of(val)
  .subscribe({
    next() {
      console.log('next');
    },
    complete() {
      console.log('complete');
    }
  })