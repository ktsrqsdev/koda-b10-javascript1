const cekPhi = (r) => {
    let pi
    if (r % 7 == 0){
        pi = 22/7
    } else {
        pi = 3.14
    }
    return pi
}

const hitungLuas = (r, cb) => {
    const luas = cekPhi(r) * r * r
    cb(luas)
}

const hitungKeliling = (r, cb) => {
    const keliling = 2 * cekPhi(r) * r
    cb(keliling)
}

const tampilkanHasil = (r) => {
    hitungLuas(r, console.log);
    hitungKeliling(r, console.log)
}

tampilkanHasil(7)
