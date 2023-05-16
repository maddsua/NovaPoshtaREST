import { i_np_response, mkRestRequest } from "../util.js";

const sharedProps = {
	modelName: 'AdditionalService'
};


/* METHOD: CheckPossibilityCreateReturn */

interface i_CheckPossibilityCreateReturn_result extends i_np_response {
	data: Array<{
		NonCash: boolean;
		City: string;
		Counterparty: string;
		ContactPerson: string;
		Address: string;
		Phone: string;
		Ref: string;
	}>
}

export const CheckPossibilityCreateReturn = async (apiToken: string, props: {
	Number: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'CheckPossibilityCreateReturn',
	methodProperties: props
})) as i_CheckPossibilityCreateReturn_result;


/* METHOD: getReturnReasons */

interface i_getReturnReasons_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
	}>
}

export const getReturnReasons = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getReturnReasons',
	methodProperties: {}
})) as i_getReturnReasons_result;


/* METHOD: getReturnReasonsSubtypes */

interface i_getReturnReasonsSubtypes_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		ReasonRef: string;
	}>
}

export const getReturnReasonsSubtypes = async (apiToken: string, props: {
	ReasonRef: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getReturnReasonsSubtypes',
	methodProperties: props
})) as i_getReturnReasonsSubtypes_result;


/* METHOD: orderCargoReturn */

interface i_orderCargoReturn_result extends i_np_response {
	data: Array<{
		Ref: string;
		Number: string;
	}>
}

export const orderCargoReturn = async (apiToken: string, props: {
	IntDocNumber: string;
	PaymentMethod: string;
	Reason: string;
	SubtypeReason: string;
	Note?: string;
	ReturnAddressRef: string;
	RecipientSettlement?: string;
	RecipientSettlementStreet?: string;
	BuildingNumber?: string;
	NoteAddressRecipient?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'save',
	methodProperties: Object.assign({
		OrderType: 'orderCargoReturn'
	}, props)
})) as i_orderCargoReturn_result;


/* METHOD: getReturnOrdersList */

interface i_getReturnOrdersList_result extends i_np_response {
	data: Array<{
		OrderRef: string;
		OrderNumber: string;
		OrderStatus: string;
		DocumentNumber: string;
		CounterpartyRecipient: string;
		ContactPersonRecipient: string;
		AddressRecipient: string;
		DeliveryCost: string;
		EstimatedDeliveryDate: string;
		ExpressWaybillNumber: string;
		ExpressWaybillStatus: string;
	}>
}

export const getReturnOrdersList = async (apiToken: string, props: {
	Number?: string;
	Ref?: string;
	BeginDate?: string;
	EndDate?: string;
	Page?: string;
	Limit?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getReturnOrdersList',
	methodProperties: props
})) as i_getReturnOrdersList_result;


/* METHOD: deleteAdditionalService */

interface i_delete_result extends i_np_response {
	data: Array<{
		Number: string;
	}>
}

export const deleteAdditionalService = async (apiToken: string, props: {
	Ref: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'delete',
	methodProperties: props
})) as i_delete_result;


/* METHOD: CheckPossibilityChangeEW */

interface i_CheckPossibilityChangeEW_result extends i_np_response {
	data: Array<{
		CanChangeSender: boolean;
		CanChangeRecipient: boolean;
		CanChangePayerTypeOrPaymentMethod: boolean;
		CanChangeBackwardDeliveryDocuments: boolean;
		CanChangeBackwardDeliveryMoney: boolean;
		CanChangeCash2Card: boolean;
		CanChangeBackwardDeliveryOther: boolean;
		CanChangeAfterpaymentType: boolean;
		CanChangeLiftingOnFloor: boolean;
		CanChangeLiftingOnFloorWithElevator: boolean;
		CanChangeFillingWarranty: boolean;
		SenderCounterparty: string;
		ContactPersonSender: string;
		SenderPhone: string;
		RecipientCounterparty: string;
		ContactPersonRecipient: string;
		RecipientPhone: string;
		PayerType: string;
		PaymentMethod: string;
	}>
}

export const CheckPossibilityChangeEW = async (apiToken: string, props: {
	IntDocNumber: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'CheckPossibilityChangeEW',
	methodProperties: props
})) as i_CheckPossibilityChangeEW_result;


/* METHOD: getChangeEWOrdersList */

interface i_getChangeEWOrdersList_result extends i_np_response {
	data: Array<{
		OrderRef: string;
		OrderNumber: string;
		OrderStatus: string;
		DocumentNumber: string;
		DateTime: string;
		BeforeChangeSenderCounterparty: string;
		AfterChangeChangeSenderCounterparty: string;
		Cost: string;
		BeforeChangeSenderPhone: string;
		AfterChangeSenderPhone: string;
	}>
}

export const getChangeEWOrdersList = async (apiToken: string, props: {
	Number: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getChangeEWOrdersList',
	methodProperties: props
})) as i_getChangeEWOrdersList_result;


/* METHOD: checkPossibilityForRedirecting */

interface i_checkPossibilityForRedirecting_result extends i_np_response {
	data: Array<{
		Ref: string;
		Number: string;
		PayerType: string;
		PaymentMethod: string;
		WarehouseRef: string;
		WarehouseDescription: string;
		AddressDescription: string;
		StreetDescription: string;
		BuildingNumber: string;
		CityRecipient: string;
		CityRecipientDescription: string;
		SettlementRecipient: string;
		SettlementRecipientDescription: string;
		SettlementType: string;
		CounterpartyRecipientRef: string;
		CounterpartyRecipientDescription: string;
		RecipientName: string;
		PhoneSender: string;
		PhoneRecipient: string;
		DocumentWeight: string;
	}>
}

export const checkPossibilityForRedirecting = async (apiToken: string, props: {
	Number?: string;
	Ref?: string;
	BeginDate: string;
	EndDate: string;
	Page: string;
	Limit: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'checkPossibilityForRedirecting',
	methodProperties: props
})) as i_checkPossibilityForRedirecting_result;


/* METHOD: getRedirectionOrdersList */

interface i_getRedirectionOrdersList_result extends i_np_response {
	data: Array<{
		OrderRef: string;
		OrderNumber: string;
		DateTime: string;
		DocumentNumber: string;
		Note: string;
		CityRecipient: string;
		RecipientAddress: string;
		CounterpartyRecipient: string;
		RecipientName: string;
		PhoneRecipient: string;
		PayerType: string;
		DeliveryCost: string;
		EstimatedDeliveryDate: string;
		ExpressWaybillNumber: string;
		ExpressWaybillStatus: string;
	}>
}

export const getRedirectionOrdersList = async (apiToken: string, props: {
	Number?: string;
	Ref?: string;
	BeginDate?: string;
	EndDate?: string;
	Page?: string;
	Limit?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getRedirectionOrdersList',
	methodProperties: props
})) as i_getRedirectionOrdersList_result;
