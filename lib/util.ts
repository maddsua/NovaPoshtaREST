
export interface i_np_rest_params {
	apiKey: string;
	modelName: string;
	calledMethod: string;
	methodProperties: object;
};

export interface i_np_response {
	success: boolean;
	data: object[];
	errors: string[];
	errorCodes: string[];
	warnings: string[];
	warningCodes: string[];
	info: string[];
	infoCodes: string[];
	messageCodes: string[];
}

const apiEndpoint = 'https://api.novaposhta.ua/v2.0/json/';	

export const mkRestRequest = async (props: i_np_rest_params): Promise<i_np_response> => {

	try {

		const serverResponse = await fetch(apiEndpoint, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(props)
		});

		if (serverResponse.status !== 200) throw new Error('API returned undexpedted http code');
		if (!serverResponse.headers.get('content-type')?.includes('json')) throw new Error('API returned invalid content-type');

		return await serverResponse.json() as i_np_response;
		
	} catch (error) {

		return {
			success: false,
			data: [],
			errors: [`API/Network Error: ${error}`],
			errorCodes: [],
			warnings: [],
			warningCodes: [],
			info: [],
			infoCodes: [],
			messageCodes: []
		};
	}
}
