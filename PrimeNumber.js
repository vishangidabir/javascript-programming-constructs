let number=7;
let count=0;
    for(let i =0 ; i< number/2 ; i++){
    if (number%2==0) { 
        count++;
    }
    }
    if(count==0){
        console.log(number+" It is a prime number");
    }else{
        console.log(number +" It is not a prime number");
    }
