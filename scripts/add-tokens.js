const fs = require('fs');
const path = require('path');

const name = process.argv[2];
const newTokens = process.argv[3];
const tokensFilePath = path.join(__dirname, `../tokens/${name}.json`);

if (newTokens.length === 0) {
	console.error('Please provide at least one token as an argument.');
	process.exit(1);
}

fs.writeFileSync(tokensFilePath, newTokens);
console.log('Tokens replaced successfully.');
