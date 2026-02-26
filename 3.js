let N = Number(prompt("Digite um número entre 2 e 1000:"))
let tabuada=[]
let multipli = 1
let i = 0

for(multipli = 1; multipli<=11; multipli++,i++){
tabuada[i] = multipli * N
}

let result = 0
let b = 1

for(result = 1; result<=10; result++, b++){
alert(`${b} X ${N} = ${tabuada [result-1]}`)
}