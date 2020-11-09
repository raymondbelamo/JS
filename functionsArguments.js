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
</script>

