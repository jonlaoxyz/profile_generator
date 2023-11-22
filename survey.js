const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  data.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    data.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      data.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        data.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          data.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            data.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              data.push(answer);
              console.log(`\n Hi, my name is ${data[0]}. I like ${data[1]} and I listen to ${data[2]} while doing ${data[1]}. My favourite meal is ${data[3]} and my favourite thing to eat is ${data[4]}. While my absolute favourite sport is ${data[5]}. Lastly, my secret superpower is ${data[6]}!\n`);
              //console.log(data);
              rl.close();
            });
          });
        });
      });
    });
  });
});

/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/