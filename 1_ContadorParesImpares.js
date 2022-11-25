function find_total( my_numbers ) {
    let cont = 0;
    my_numbers.forEach(number=>{
        if(number===5){
           cont+=5;
       }else{
           if(number%2===0){
               cont+=1;
           }else{
               cont+=3;
           }
       }
    });
    return cont;
}

const numbers = [5, 5, 5];
console.log(find_total(numbers));