import { i_np_response, mkRestRequest } from "../util.js";

const sharedProps = {
	modelName: 'ScanSheet'
};


/* METHOD: insertDocuments */

interface i_insertDocuments_result extends i_np_response {
	data: Array<{
		Ref: string;
		Number: string;
		Date: string;
	}>
}

export const insertDocuments = async (apiToken: string, props: {
	DocumentRefs: string[];
	Ref: string;
	Date: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'insertDocuments',
	methodProperties: props
})) as i_insertDocuments_result;


/* METHOD: getScanSheet */

interface i_getScanSheet_result extends i_np_response {
	data: Array<{
		Ref: string;
		Number: string;
		DateTime: string;
		Count: string;
		CitySenderRef: string;
		CitySender: string;
		SenderAddressRef: string;
		SenderAddress: string;
		SenderRef: string;
		Sender: string;
	}>
}

export const getScanSheet = async (apiToken: string, props: {
	Ref: string;
	CounterpartyRef: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getScanSheet',
	methodProperties: props
})) as i_getScanSheet_result;


/* METHOD: getScanSheetList */

interface i_getScanSheetList_result extends i_np_response {
	data: Array<{
		Ref: string;
		Number: string;
		DateTime: string;
		Printed: string;
	}>
}

export const getScanSheetList = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getScanSheetList',
	methodProperties: {}
})) as i_getScanSheetList_result;


/* METHOD: deleteScanSheet */

interface i_deleteScanSheet_result extends i_np_response {
	data: Array<{
		Ref: string;
		Number: string;
		Error: string;
	}>
}

export const deleteScanSheet = async (apiToken: string, props: {
	ScanSheetRefs: string[];
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'deleteScanSheet',
	methodProperties: props
})) as i_deleteScanSheet_result;


/* METHOD: removeDocuments */

interface i_removeDocuments_result extends i_np_response {
	data: Array<{
		Ref: string;
		Number: string;
		Error: string;
	}>
}

export const removeDocuments = async (apiToken: string, props: {
	DocumentRefs: string[];
	Ref?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'removeDocuments',
	methodProperties: props
})) as i_removeDocuments_result;
