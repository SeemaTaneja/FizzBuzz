
for(let i = 1 ; i <=100; i++){
    let fizzBuzzString = "";
    if( i % 3 == 0){
      fizzBuzzString += "Fizz";
   }
   if( i % 5 == 0){
       fizzBuzzString += "Buzz";
   }
   if(fizzBuzzString === ""){
    fizzBuzzString += i;
   }
   console.log(fizzBuzzString);
}
