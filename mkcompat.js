import fsextra from "fs-extra";
import fs from 'fs';
import { globSync } from 'glob';
import path from "path";

/* Make compatible with older versions of Node */

(() => {

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

})();


/* Make compatible with Deno */

(() => {

	const importRegex = /\sfrom\s[\'\"][\w\d\.\\\/\-\_]+[\'\"];?/g;

	const srcFiles = globSync('./lib/**/*.ts', {nodir: true}).map((item) => item.replace(/[\\\/]/g, '/'));

	srcFiles.forEach((item) => {
		let contents = fs.readFileSync(item, { encoding: 'utf8' });

		contents.match(importRegex)?.forEach((pattern) => {
			const exactMatch = pattern.match(/\.js[\'\"];?$/)?.[0];
			if (!exactMatch) return;
			const replaceExact = pattern.replace(exactMatch, exactMatch?.replace('.js', '.ts'));
			if (!replaceExact) return;
			contents = contents.replace(pattern, replaceExact);
		});

		const newPath = item.replace(/(^\.\/)?lib\//, './dist/deno/');
		const destDir = path.dirname(newPath);

		if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, {recursive: true});
		fs.writeFileSync(newPath, contents);
	});

})();
