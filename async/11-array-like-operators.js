const { map, filter } = require("rxjs/operators");
const { alphabet } = require("./alphabet");

function isVowel(letter) {
    return ['A', 'E', 'I', 'O', 'U', 'Y'].includes(letter);
}

alphabet().pipe(
    filter(isVowel),
    map((letter) => letter.toLowerCase())
).subscribe((letterLowercase) => {
    console.log(letterLowercase);
});

// -A-B-C-D-E-F-G-...-X-Y-Z|
// filter(isVowel)
// -A- - - -E- - -...- -Y- |
// map(lower)
// -a- - - -e- - -...- -y- |


// --------------({id: 1})|


