const chalk   = require('chalk');
const express = require('express');
const app     = express();
var path      = require("path");

console.log(`
${chalk.red.bold("Rubble Static")}
${chalk.red("Hi there, coder! This is pretty neat isn't it? Anyway, greetings aside, we're just deploying your server to localhost port 5000 :-)")}

${chalk.yellow("We all get errors all the time. Here's a tip: if you don't know, try going into every terminal window and pressing Ctrl+C to close any open servers. That should do the trick :)")}
`);

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(5000, () => console.log(`
${chalk.greenBright.bold("Deployed! You can now find your files on port 5000.")}
${chalk.greenBright("Congrats dev king/queen! Your files are deployed. Now just go to localhost:5000 in a web browser to take a look.")}
${chalk.greenBright("Well, that's me out. Ciao for now, and remember you can always press Ctrl+C to end the server.")}
`));