const { scheduled, asapScheduler } = require("rxjs");

scheduled([], asapScheduler)
  .subscribe({
    next() {
      console.log('next');
    },
    complete() {
      console.log('complete');
    }
  })