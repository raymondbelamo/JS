let input = prompt("HELLO, I'M JARVIS! WHAT WOULD YOU LIKE TO DO?");
const todos = [];
while (input !== "quit" && input !== "q" && input !== "QUIT" && input !== "Q") {
    if (input === "list" || input === "LIST" || input === "L" || input === "l") {
        console.log("***************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***************")
    } else if (input === "new" || input === "NEW" || input === "N" || input === "n") {
        const newTodo = prompt("WHAT TODO DO YOU WANT JARVIS TO ADD?");
        todos.push(newTodo);
        console.log(`ALRIGHT. JARVIS JUST ADDED ${newTodo} TO THE LIST!`);
    } else if (input === "delete" || input === "DELETE" || input === "D" || input === "d") {
        const index = parseInt(prompt("WHAT TODO WOULD YOU LIKE JARVIS TO DELETE? TELL ME THE INDEX"));
        if (!Number.isNaN(index)) {
            const removed = todos.splice(index, 1);
            console.log(`ALRIGHT, JARVIS DELETED ${removed[0]}!`);
        } else {
            console.log("I DON'T THINK I RECOGNIZE THAT!")
        }
    }
    input = prompt("WHAT WOULD YOU LIKE TO DO?")
}
console.log("OK QUIT");
