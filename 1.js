
let num = Number(prompt("Digite um numero Qualquer"))
let num2 = Number(prompt("Digite outro numero Qualquer"))

let A; let B

if(num<num2){
 A=num; B=num2
}
else{
 A=num2; B=num
}

let nums = []

for(loop = A+1; loop<B;loop++){
    if(loop % 2 !== 0){
      nums.push(loop)
    }
}

let loopSoma
let soma = 0;

for(loopSoma = 0; loopSoma<nums.length; loopSoma++){
    soma += nums[loopSoma]
}


alert(`A soma é: ${soma}`)





