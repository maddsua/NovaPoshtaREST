import { i_np_response, mkRestRequest } from "../util.js";

const sharedProps = {
	modelName: 'InternetDocument'
};


/* METHOD: getDocumentPrice */

interface i_getDocumentPrice_result extends i_np_response {
	data: Array<{
		AssessedCost: string;
		Cost: string;
		CostRedelivery: string;
		TZoneInfo: object;
		CostPack: string;
	}>
}

export const getDocumentPrice = async (apiToken: string, props: {
	CitySender: string;
	CityRecipient: string;
	Weight: string;
	ServiceType: string;
	Cost: string;
	CargoType: string;
	SeatsAmount: string;
	RedeliveryCalculate?: string;
	PackCount?: string;
	PackRef?: string;
	Amount?: string;
	CargoDetails?: string;
	CargoDescription?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getDocumentPrice',
	methodProperties: props
})) as i_getDocumentPrice_result;


/* METHOD: getDocumentDeliveryDate */

interface i_getDocumentDeliveryDate_result extends i_np_response {
	data: Array<{
		date: string;
		timezone_type: string;
		timezone: string;
	}>
}

export const getDocumentDeliveryDate = async (apiToken: string, props: {
	DateTime?: string;
	ServiceType: string;
	CitySender: string;
	CityRecipient: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getDocumentDeliveryDate',
	methodProperties: props
})) as i_getDocumentDeliveryDate_result;


/* METHOD: save */

interface i_save_and_update_result extends i_np_response {
	data: Array<{
		Ref: string;
		CostOnSite: string;
		EstimatedDeliveryDate: string;
		IntDocNumber: string;
		TypeDocument: string;
	}>
}

export const saveExpressDoc = async (apiToken: string, props: {
	SenderWarehouseIndex?: string;
	RecipientWarehouseIndex?: string;
	PayerType: string;
	PaymentMethod: string;
	DateTime: string;
	CargoType: string;
	VolumeGeneral?: string;
	Weight: string;
	ServiceType: string;
	SeatsAmount: string;
	Description: string;
	Cost: string;
	CitySender: string;
	Sender: string;
	SenderAddress: string;
	ContactSender: string;
	SendersPhone: string;
	CityRecipient: string;
	Recipient: string;
	RecipientAddress: string;
	ContactRecipient: string;
	RecipientsPhone: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'save',
	methodProperties: props
})) as i_save_and_update_result;


/* METHOD: update */

export const updateExpressDoc = async (apiToken: string, props: {
	Ref: string;
	PayerType: string;
	PaymentMethod: string;
	DateTime: string;
	CargoType: string;
	VolumeGeneral?: string;
	Weight: string;
	ServiceType: string;
	SeatsAmount: string;
	Description: string;
	Cost: string;
	CitySender: string;
	Sender: string;
	SenderAddress: string;
	ContactSender: string;
	SendersPhone: string;
	CityRecipient: string;
	Recipient: string;
	RecipientAddress: string;
	ContactRecipient: string;
	RecipientsPhone: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'update',
	methodProperties: props
})) as i_save_and_update_result;


/* METHOD: getDocumentList */

interface i_getDocumentList_result extends i_np_response {
	data: Array<{
		Ref: string;
		DateTime: string;
		PreferredDeliveryDate: string;
		RecipientDateTime: string;
		EWDateCreated: string;
		Weight: string;
		SeatsAmount: string;
		IntDocNumber: string;
		Cost: string;
		CitySender: string;
		CityRecipient: string;
		SenderAddress: string;
		RecipientAddress: string;
		CostOnSite: string;
		PayerType: string;
		PaymentMethod: string;
		AfterpaymentOnGoodsCost: string;
		PackingNumber: string;
		RejectionReason: string;
		StateId: string;
		StateName: string;
	}>
}

export const getDocumentList = async (apiToken: string, props: {
	DateTimeFrom: string;
	DateTimeTo: string;
	Page?: string;
	GetFullList: string;
	DateTime?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getDocumentList',
	methodProperties: props
})) as i_getDocumentList_result;


/* METHOD: delete */

interface i_delete_result extends i_np_response {
	data: Array<{ Ref: string }>
}

export const deleteExpressDoc = async (apiToken: string, props: {
	DocumentRefs: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'delete',
	methodProperties: props
})) as i_delete_result;


/* METHOD: generateReport */

interface i_generateReport_result extends i_np_response {
	data: Array<{
		Ref: string;
		DateTime: string;
		PreferredDeliveryDate: string;
		Weight: string;
		SeatsAmount: string;
		IntDocNumber: string;
		Cost: string;
		CitySender: string;
		CityRecipient: string;
		State: string;
		SenderAddress: string;
		RecipientAddress: string;
		CostOnSite: string;
		PayerType: string;
		PaymentMethod: string;
		AfterpaymentOnGoodsCost: string;
		PackingNumber: string;
	}>
}

export const generateReport = async (apiToken: string, props: {
	DocumentRefs: string[];
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'generateReport',
	methodProperties: props,
	Type: 'csv',
	DateTime: (new Date()).toLocaleString('uk', { year: 'numeric', month: 'numeric', day: 'numeric' }).replace(/\s/g, '')
})) as i_generateReport_result;

