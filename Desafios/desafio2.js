function Fibonacci(n){
    
    let previous = 0
    let current = 1
    let next = 0
    let sequenciaFibonacci = [];

    while (n > next){
        next = previous + current
        previous = current
        current = next
        sequenciaFibonacci.push(next)
    } 
    console.log(sequenciaFibonacci);

    if(sequenciaFibonacci.includes(n)){
        return ('O número está na sequência de fibonacci')
    } else {
        return ('O número não faz parte da sequência de fibonnaci')
    }
}

console.log(Fibonacci(610));