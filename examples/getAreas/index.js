import { getAreas } from "../../dist/models/Address.js";

(async () => {
	const { success, data, errors } = await getAreas('');	//	works without api token for now
	console.log(success ? data : errors);
})();
