// function timeout(letter, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(letter);
//             resolve();
//         }, delay);
//     });
// }

// timeout('A', 500)
//     .then(() => timeout('B', 0))
//     .then(() => timeout('C', 1000))
//     .then(() => timeout('D', 500));

const { Observable } = require('rxjs');

function interval(letter, delay) {
    return new Observable((observer) => {
        setInterval(() => {
            observer.next(letter);
        }, delay);
    });
}

interval('A', 500)
    .subscribe((letter) => console.log(letter));