let temp0;	//	use 'Use in console' command in Firefox to get the temp0 reference

//	then run this snippet in console:

((containter) => {

	const entries = Array.from(containter.querySelectorAll('tr')).map((item) => Array.from(item.querySelectorAll('td')).map((item) => item.textContent).filter((_val, idx) => idx < 2)).filter((item) => item[0]?.length && item[1]?.length).map((item) => ({
		key: item[0].replace(/\s+/g, ''),
		value: item[1].replace(/\s+/g, '')
	}));

	const typeObjects = entries.map((item) => ({
		propName: item.key.replace(/\*/g, ''),
		required: item.key.endsWith('*'),
		typeName: item.value.replace(/\[\d+\]/g, '')
	}));

	const generatedTypeText = typeObjects.map((item) => `${item.propName}${ item.required ? '' : '?'}: ${item.typeName};`);

	return `interface i_temp0 {\n${generatedTypeText.join('\n')}\n}\n`;

})(temp0)
