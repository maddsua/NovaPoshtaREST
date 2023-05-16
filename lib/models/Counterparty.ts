import { i_np_response, mkRestRequest } from "../util.js";

const sharedProps = {
	modelName: 'Counterparty'
};

type t_ContactPerson = {
	[index: string]: {
		Description: string;
		Ref: string;
		LastName: string;
		FirstName: string;
		MiddleName: string;
	}
};
type t_CounterpartyType = 'Organization' | 'PrivatePerson';
type t_CounterpartyProperty = 'Sender' | 'Recipient' | 'ThirdPerson';
type t_DebtorParams  = {
	AgreementId: string;
	PaymTermId: string;
	PastDueDebts: string;
	BlockedStatus: string;
};
type t_PrintMarkingAllowedTypes  = {
	vbf: string;
};


/* METHOD: save */

interface i_save_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		FirstName: string;
		MiddleName: string;
		LastName: string;
		Counterparty: string;
		OwnershipForm: string;
		OwnershipFormDescription: string;
		EDRPOU: string;
		CounterpartyType: string;
		ContactPerson: Array<t_ContactPerson | { scalar: boolean }>;
	}>
}

export const saveCounterparty = async (apiToken: string, props: {
	FirstName: string;
	MiddleName: string;
	LastName: string;
	Phone: string;
	Email: string;
	CounterpartyType: t_CounterpartyType;
	CounterpartyProperty: t_CounterpartyProperty;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'save',
	methodProperties: props
})) as i_save_result;


/* METHOD: update */

export const updateCounterparty = async (apiToken: string, props: {
	Ref: string;
	CityRef: string;
	FirstName: string;
	MiddleName: string;
	LastName: string;
	Phone?: string;
	Email?: string;
	CounterpartyType: t_CounterpartyType;
	CounterpartyProperty: t_CounterpartyProperty;
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

export const deleteCounterparty = async (apiToken: string, props: {
	Ref: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'delete',
	methodProperties: props
})) as i_delete_result;


/* METHOD: getCounterpartyAddresses */

interface i_getCounterpartyAddresses_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
	}>
}

export const getCounterpartyAddresses = async (apiToken: string, props: {
	Ref: string;
	CounterpartyProperty: t_CounterpartyProperty;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getCounterpartyAddresses',
	methodProperties: props
})) as i_getCounterpartyAddresses_result;


/* METHOD: getCounterpartyOptions */

interface i_getCounterpartyOptions_result extends i_np_response {
	data: Array<{
		AddressDocumentDelivery: boolean;
		AfterpaymentType: boolean;
		BackwardDeliverySubtypesDocuments: boolean;
		BlockInternationalSenderLKK: boolean;
		CalculationByFactualWeight: boolean;
		CanAfterpaymentOnGoodsCost: boolean;
		CanCreditDocuments: boolean;
		CanEWTransporter: boolean;
		CanForwardingService: boolean;
		CanNonCashPayment: boolean;
		CanPayTheThirdPerson: boolean;
		CanSameDayDelivery: boolean;
		CanSameDayDeliveryStandart: boolean;
		CanSentFromPostomat: boolean;
		CanSignedDocuments: boolean;
		CarCall: boolean;
		CreditDocuments: boolean;
		CustomerReturn: boolean;
		DayCustomerReturn: boolean;
		DebtorParams: Array<t_DebtorParams>;
		DeliveryByHand: boolean;
		DescentFromFloor: boolean;
		FillingWarranty: boolean;
		HaveMoneyWallets: boolean;
		HideDeliveryCost: boolean;
		InternationalDelivery: boolean;
		InternationalDeliveryServiceType: boolean;
		LoyaltyProgram: boolean;
		MainCounterparty: boolean;
		PickupService: boolean;
		PrintMarkingAllowedTypes: t_PrintMarkingAllowedTypes;
		SecurePayment: boolean;
		Services: boolean;
		ShowDeliveryByHand: boolean;
		SignedDocuments: boolean;
		TransferPricingConditions: boolean;
	}>
}

export const getCounterpartyOptions = async (apiToken: string, props: {
	Ref: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getCounterpartyOptions',
	methodProperties: props
})) as i_getCounterpartyOptions_result;


/* METHOD: getCounterpartyContactPersons */

interface i_getCounterpartyContactPersons_result extends i_np_response {
	data: Array<{
		Description: string;
		Ref: string;
		Phones: string;
		Email: string;
		LastName: string;
		FirstName: string;
		MiddleName: string;
	}>
}

export const getCounterpartyContactPersons = async (apiToken: string, props: {
	Ref: string;
	Page?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getCounterpartyContactPersons',
	methodProperties: props
})) as i_getCounterpartyContactPersons_result;


/* METHOD: getCounterparties */

interface i_getCounterparties_result extends i_np_response {
	data: Array<{
		Description: string;
		Ref: string;
		City: string;
		Counterparty: string;
		FirstName: string;
		LastName: string;
		MiddleName: string;
		OwnershipFormRef: string;
		OwnershipFormDescription: string;
		EDRPOU: string;
		CounterpartyType: string;
	}>
}

export const getCounterparties = async (apiToken: string, props: {
	CounterpartyProperty: t_CounterpartyProperty;
	Page?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getCounterparties',
	methodProperties: props
})) as i_getCounterparties_result;
