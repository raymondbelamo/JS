<script>
//Very first Function
function printHeart () {
    console.log("<3");
}
printHeart();

//With an Argument
function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}
rant("I hate beets");

//With Multiple Args
function isSnakeEyes(a, b) {
    if (a === 1 && b === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
isSnakeEyes(1,1);

//Use return instead
function multiply (x,y) {
    return x * y;
}
multiply(2,3);

//Another function
function isShortsWeather (temperature) {
    if (temperature < 75) {
        return false;
    } else {
        return true;
    }
}

//Another function
function lastElement(arr) {
    if (!arr.length) return null;
    return arr[arr.length - 1];
}
console.log(lastElement([3, 5, 7])); 
console.log(lastElement([1]));
console.log(lastElement([])); 

//Capitalize function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Add nums in Array function
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

//Days Of The Week Exercise
function returnDay (dayNumber) {
    if (dayNumber < 1 || dayNumber > 7) {
        return null;
    }
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let dayName = days[dayNumber - 1];
    return dayName;
}
</script>

