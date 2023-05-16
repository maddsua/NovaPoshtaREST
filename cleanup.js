import fs from 'fs';

const distDir = './dist';

if (fs.existsSync(distDir)) fs.rmdirSync(distDir, {
	recursive: true
})