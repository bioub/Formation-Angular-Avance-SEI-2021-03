function timeout(letter, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(letter);
        }, delay);
    });
}

// timeout('A', Math.random() * 1000)
//     .then((letter) => {
//         console.log(letter);
//     });

// timeout('B', Math.random() * 1000)
//     .then((letter) => {
//         console.log(letter);
//     });

Promise.all([
    timeout('A', Math.random() * 1000),
    timeout('B', Math.random() * 1000),
])
.then((letters) => {
    console.log(letters);
})