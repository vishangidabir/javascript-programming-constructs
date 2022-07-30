let lower = 0;
let upper = 100;
console.log("PrimeNumbers between " +lower + " to " + upper);
for (let number = lower; number < upper; number++){
    let count =0;
    let temp = number
    for(let i=1; i<=temp; i++){
        if(temp % i == 0){
            count++;
        }
    }
    if(count == 2){
        console.log(number+" ");
    }
}