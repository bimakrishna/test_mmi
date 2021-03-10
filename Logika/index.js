// // NOMOR 1

function okYes (n) {
    for (let i = 1; i<=n; i++) {
        if(i % 3 === 0 && i % 4 !== 0){
            console.log("OK");
        }else if (i % 4 === 0 && i % 3 !== 0) {
            console.log("YES");
        }else if (i % 3 === 0 && i % 4 === 0) {
            console.log("OKYES");
        }else (
            console.log(String(i))
        )
    }
}

//Panggil
// okYes(15);

//#############################################################

// // NOMOR 2A
function duaA (n) {
    let penampung = ""

    for ( let i = 1; i<=n; i++) {
        penampung = ""
        for ( let j = 0; j<i; j++){
            penampung += i
        }
        console.log(penampung);
    }
}
// Panggil
// duaA(30)

//#############################################################

// // NOMOR 2B

function duaB (n) {
    let penampung = ""

    for ( let i = 1; i <= n; i++ ) {
        penampung = ""
        for ( let j = i; j>0; j--) (
            penampung += j
        )
        console.log(penampung);
    }
}
//Panggil
// duaB(20)

//#############################################################

// NOMOR 2C dan 2D
// belum

//#############################################################

// nomor 3 

function nomorTiga (arr) {
    let newN = []

    for ( let i = 0; i<arr.length; i++) {
        if(arr[i] % 3 !== 0) {
            newN.push(arr[i])
        }
    }
    newN.sort(function(a, b){
        return a - b;
    });
    console.log(newN);
}

//Panggil
// nomorTiga([ 12, 9, 13, 6 ,10, 4, 7, 2 ])