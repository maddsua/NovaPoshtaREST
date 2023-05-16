import { i_np_response, mkRestRequest } from "../util.js";

const sharedProps = {
	modelName: 'ContactPerson'
};

/* METHOD: save */

interface i_save_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		LastName: string;
		FirstName: string;
		MiddleName: string;
		Phones: string;
		Email: string;
	}>
}

export const saveContactPerson = async (apiToken: string, props: {
	CounterpartyRef: string;
	FirstName: string;
	LastName: string;
	MiddleName: string;
	Phone: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'save',
	methodProperties: props
})) as i_save_result;


/* METHOD: update */

export const updateContactPerson = async (apiToken: string, props: {
	Ref: string;
	CounterpartyRef: string;
	FirstName: string;
	LastName: string;
	MiddleName: string;
	Phone: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'update',
	methodProperties: props
})) as i_save_result;


/* METHOD: delete */

interface i_delete_result extends i_np_response {
	data: Array<{
		Ref: string;
	}>
}

export const deleteContactPerson = async (apiToken: string, props: {
	Ref: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'delete',
	methodProperties: props
})) as i_delete_result;
