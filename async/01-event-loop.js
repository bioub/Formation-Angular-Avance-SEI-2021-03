setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// ^
// |
// |
// |                          lg              lg    lg            lg
// |st - st - st - st - lg ⟳ cbB ⟳           cbA - cbD ⟳        cbC
// 0--------------------------5---------------500-----------------1000-> temps
//                      E     B               A     D             C

// file d'attente (0ms) : cbB
// file d'attente (5ms) : 
// file d'attente (499ms) : cbA - cbD
// file d'attente (500ms) : cbD
// file d'attente (501ms) : 
// file d'attente (999ms) : cbC
// file d'attente (1000ms) : 

// Jake Archibald - JSConf Asia 2018
// In the loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0

/*
do {
    v8->execute(codeSync)
}
while(waitingCallback);
*/


// E B A D C