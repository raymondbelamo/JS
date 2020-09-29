<script>

console.log("Print all numbers between -10 and 19");
let number = -10;
while(number < 20){
	console.log(number);
    number++;
    };
    
console.log("Print all even numbers between 10 and 40");
let nextNumber = 10;
while(nextNumber < 41){
	console.log(nextNumber);
    nextNumber += 2;
    };
    
console.log("Print all odd numbers between 300 and 333");
let aNumber = 300;
while(aNumber <= 333){
	if(aNumber % 2 ===1){
		console.log(aNumber);
    }
    aNumber++;
};
    
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
let lastNumber = 5;
while(lastNumber <= 50){
	if(lastNumber % 5 === 0 && lastNumber % 3 === 0){
    	console.log(lastNumber);
    }
    lastNumber++;
};
</script>

