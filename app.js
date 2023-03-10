const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cssProperties = {};

rl.setPrompt('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ');

rl.prompt();

rl.on('line', (line) => {
  if (line.toUpperCase() === 'SAIR') {
    const sortedProperties = Object.keys(cssProperties).sort();
    
    console.log('Propriedades ordenadas:');
    sortedProperties.forEach((prop) => {
      console.log(prop);
    });
    
    rl.close();
  } else {
    cssProperties[line] = true;
    rl.prompt();
  }
});
