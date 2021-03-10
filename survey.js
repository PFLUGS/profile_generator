const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable!', (answer) => {
  // TODO: Log the answer in a database
  console.log(`${answer} is a great Nickname!`);
 
  rl.question('What\'s an activity you like doing?', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    
    rl.question('What do you listen to while doing that?', (answer) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        // TODO: Log the answer in a database
        console.log(`${answer} is mine too`);
      
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          // TODO: Log the answer in a database
          console.log(`You will need to send me your recipe for ${answer}`);

          rl.question('What is your absolute favourite movie', (answer) => {
            // TODO: Log the answer in a database
            console.log(`${answer} I will add it to my must watch list!`);
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              // TODO: Log the answer in a database
              console.log(`${answer} that is so awesome.`);
              rl.close();
            });
          });
          
        });
      });
    });
  });
});