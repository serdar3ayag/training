const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = [];

rl.on('line',(input) => {
    if (rl.closed) return;
    else if (input === 'break'){
        console.log(a);
        rl.question("Type in the number of the element you want to remove: ",(answer) => {
            let r = parseInt(answer);
            a.splice(r-1,1);
            console.log(a);
            process.exit(0);
            rl.close();
        });
    } else {
        a.push(input);
    }
});
