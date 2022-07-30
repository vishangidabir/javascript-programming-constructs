let head = 0;
let tail = 0;
let noOfFlip = 10;
let i;
for ( i = 0; i < noOfFlip; i++) {
let coin=Math.floor(Math.random() * 2);
console.log(coin);
if(coin == 1){
    console.log("It is a Head");
    head++;
}else{
    console.log("It is a Tail");
    tail++;
}
}
