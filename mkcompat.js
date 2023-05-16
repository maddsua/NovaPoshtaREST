import fsextra from "fs-extra";
import fs from 'fs';

const tempDir = './distTemp';
const targetDir = './dist/compat';

fsextra.copySync('./dist', tempDir, {
	overwrite: true
});
if (!fsextra.existsSync(targetDir)) fsextra.mkdirSync(targetDir, {
	recursive: true
});
fsextra.moveSync(tempDir, targetDir, {
	overwrite: true
});

const importline = `import fetch from 'node-fetch';\n`;

const utilFilePath = targetDir + '/util.js';

const utilFile = fs.readFileSync(utilFilePath, {
	encoding: 'utf8'
});

fs.writeFileSync(utilFilePath, importline + utilFile, {
	encoding: 'utf8'
});