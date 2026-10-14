``` mermaid
flowchart TD
    start@{ shape: circle, label: "Start" }
    stop@{ shape: dbl-circ, label: "Stop" }
    r@{ shape: lean-r, label: "r" }
    varkosong@{ shape: rect, label: "luas, keliling" }
    modr@{ shape: diamond, label: "r % 7 == 0" }
    luas1@{ shape: rect, label: "luas = 22/7 * r * r" }
    luas2@{ shape: rect, label: "luas = 3.14 * r * r" }
    keliling1@{ shape: rect, label: "keliling = 2 * 22/7 * r" }
    keliling2@{ shape: rect, label: "keliling = 2 * 3.14 * r" }
    outputluas@{ shape: lean-r, label: "luas" }
    outputkeliling@{ shape: lean-r, label: "keliling" }


    start --> r
    r --> varkosong
    varkosong --> modr
    modr --ya--> luas1
    modr --tidak--> luas2
    luas1 --> keliling1
    luas2 --> keliling2
    keliling1 & keliling2 --> outputluas
    outputluas --> outputkeliling
    outputkeliling --> stop
    
```
