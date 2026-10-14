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
