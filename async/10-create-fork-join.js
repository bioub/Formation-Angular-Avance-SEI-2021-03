const { timer, forkJoin } = require('rxjs');
const { mapTo } = require('rxjs/operators');

forkJoin([
    timer(Math.random() * 1000).pipe(mapTo('A')),
    timer(Math.random() * 1000).pipe(mapTo('B'))
]).subscribe((results) => {
    console.log(results);
})