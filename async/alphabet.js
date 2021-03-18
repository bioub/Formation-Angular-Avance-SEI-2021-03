const { interval, from, timer } = require("rxjs");
const { take, map, delayWhen } = require("rxjs/operators");

exports.alphabet = function alphabet(delay = 100) {
    return interval(delay)
        .pipe(
            map((i) => String.fromCharCode(65 + i)),
            take(26),
        );
}

// exports.alphabet = function alphabet(delay = 100) {
//     return from(['A', 'B', 'C', 'D', 'E', 'F'])
//         .pipe(
//             delayWhen(() => timer(100)),
//         );
// }