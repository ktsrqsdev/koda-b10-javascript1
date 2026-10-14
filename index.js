const r = 7
let luas, keliling

if (r % 7 == 0) {
    luas = 22/7 * r * r
    keliling = 2 * 22/7 * r
} else {
    luas = 3.14 * r * r
    keliling = 2 * 3.14 * r
}

console.log(luas)
console.log(keliling)