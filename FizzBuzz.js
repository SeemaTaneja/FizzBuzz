
for(let i = 1 ; i <=100; i++){
    let fizzBuzzString = "";
    if( i % 3 === 0){
      fizzBuzzString += "Fizz";
   }
   if( i % 5 === 0){
       fizzBuzzString += "Buzz";
   }
   if( i % 7 === 0){
       fizzBuzzString += "Bang";
   }
   if( i % 11 === 0){
       fizzBuzzString = "Bong";
   }
   if( i % 13 === 0){
       const b = fizzBuzzString.indexOf("B");
       if(b == -1){
           fizzBuzzString += "Fezz";
       }else{
           fizzBuzzString = fizzBuzzString.slice(0 , b) + "Fezz" + fizzBuzzString.slice(b);
       }
   }
   if(fizzBuzzString === ""){
    fizzBuzzString += i;
   }
   console.log(fizzBuzzString);
}
