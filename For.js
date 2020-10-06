<script>

console.log("Print all numbers between -10 and 19");
for (let n = -10; n < 20; n++) {
	console.log(n);
};
    
console.log("Print all even numbers between 10 and 40");
for (let a = 10; a <= 40; a+=2) {
	console.log(a);
};
    
console.log("Print all odd numbers between 300 and 333");
for (i = 300; i <= 333; i++) {
	if(i % 2 === 1){
		console.log(i);
    }
};
    
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for (j = 5; j <= 50; j++) {
	if(j % 5 === 0 && j % 3 === 0){
    	console.log(j);
    }
};
</script>
