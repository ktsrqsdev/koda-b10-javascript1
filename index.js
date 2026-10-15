const lingkaran = {
    r : 7,
    cekPhi: function(){
        if(this.r % 7 == 0){
            pi = 22/7
        }else{
            pi = 3.14
        }
        return pi
    },
    hitungLuas: function(){
        luas = this.cekPhi() * this.r * this.r
        return luas
    },
    hitungKeliling: function(){
        keliling = 2 * this.cekPhi() * this.r  
        return keliling
    },
    tampilkanHasil: function(){
        this.cekPhi()
        console.log(this.hitungLuas())
        console.log(this.hitungKeliling())
    }
}

lingkaran.tampilkanHasil()
