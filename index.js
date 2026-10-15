const r = 7

// Pure
function cekPhi(radius){
    let pi
    if (radius % 7 == 0) {
        pi = 22/7 
    } else {
        pi = 3.14
    }
    return pi
}

// Impure function
function hitung(){
    pi = cekPhi(r)
    let luas, keliling
    luas = pi * r * r
    keliling = 2 * pi * r
    return [
        luas,
        keliling
    ]
}

const [luas, keliling] = hitung()
console.log(luas, keliling)
