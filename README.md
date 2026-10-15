``` mermaid
flowchart TD
    start@{ shape: circle, label: "Start" }
    stop@{ shape: dbl-circ, label: "Stop" }
    r@{ shape: lean-r, label: "r" }
    varkosong@{ shape: rect, label: "pi, luas, keliling" }
    modr@{ shape: diamond, label: "r % 7 == 0" }
    pi1@{ shape: rect, label: "pi = 22/7" }
    pi2@{ shape: rect, label: "pi = 3.14" }
    luas@{ shape: rect, label: "luas = pi * r * r" }
    keliling@{ shape: rect, label: "keliling = 2 * pi * r" }
    outputluas@{ shape: lean-r, label: "luas" }
    outputkeliling@{ shape: lean-r, label: "keliling" }


    start --> r
    r --> varkosong
    varkosong --> modr
    modr --ya--> pi1
    modr --tidak--> pi2
    pi1 & pi2 --> luas
    luas--> keliling
    keliling--> outputluas
    outputluas --> outputkeliling
    outputkeliling --> stop
    
```

cekPhi(r) menentukan nilai phi, yaitu 22/7 jika r habis dibagi 7, atau 3.14 jika tidak. hitungLuas(r, cb) menghitung luas lingkaran, lalu cb(luas) mengirim hasilnya ke callback. hitungKeliling(r, cb) menghitung keliling lingkaran, lalu cb(keliling) mengirim hasilnya ke callback. tampilkanHasil(r) memanggil kedua fungsi dengan console.log sebagai callback untuk menampilkan hasil. lalu tampilkanHasil(7) menjalankan perhitungan dengan jari-jari 7 dan menghasilkan output luas 154 serta keliling 44.
