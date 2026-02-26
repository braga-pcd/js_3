let N = Number(prompt("Digite o numero de vezes:"))
let loop
let nums

for(loop=0;loop<N;loop++){
    nums = Number(prompt("Digite um numero Qualquer"))

    if(nums===0){
        alert("NULL")
    }
    else if(nums % 2 === 0 && nums>0){
        alert("EVEN POSITIVE")
    }
    else if(nums % 2 === 0 && nums<0){
        alert("EVEN NEGATIVE")
    }
    else if(nums % 2 !== 0 && nums>0){
        alert("ODD POSITIVE")
    }
    else if(nums % 2 !== 0 && nums<0){
        alert("ODD NEGATIVE")
    }
    

}