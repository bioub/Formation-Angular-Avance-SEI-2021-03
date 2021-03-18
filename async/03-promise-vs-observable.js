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

// function interval(letter, delay) {
//     return new Observable((observer) => {
//         let count = 0;
//         let _interval = setInterval(() => {
//             observer.next(letter);
//             if (++count >= 3) {
//                 observer.complete();
//                 clearInterval(_interval);
//             }
//         }, delay);
//     });
// }

function interval(letter, delay) {
    return new Observable((observer) => {
        const _interval = setInterval(() => {
            observer.next(letter);
        }, delay);

        return () => {
            observer.complete();
            clearInterval(_interval);
        }
    });
}

const sub = interval('A', 1000)
    .subscribe({
        next(letter) {
            console.log(letter);
        },
        error(err) {
            console.log(err);
        },
        complete() {
            console.log('completed');
        }
    });


    setTimeout(() => {
        sub.unsubscribe();
    }, 4500);