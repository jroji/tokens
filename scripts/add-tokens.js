const fs = require('fs');
const path = require('path');

const tokensFilePath = path.join(__dirname, '../tokens.json');
const newTokens = process.argv.slice(2);

if (newTokens.length === 0) {
	console.error('Please provide at least one token as an argument.');
	process.exit(1);
}

// Overwrite the file with the new tokens
fs.writeFileSync(tokensFilePath, JSON.stringify(newTokens, null, 2));
console.log('Tokens replaced successfully.');
