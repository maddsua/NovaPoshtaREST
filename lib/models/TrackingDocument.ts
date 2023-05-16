import { i_np_response, mkRestRequest } from "../util.js";

const sharedProps = {
	modelName: 'TrackingDocument'
};


/* METHOD: getStatusDocuments */

interface i_getStatusDocuments_result extends i_np_response {
	data: Array<{
		PossibilityCreateReturn: boolean;
		PossibilityCreateRefusal: boolean;
		PossibilityChangeEW: boolean;
		PossibilityCreateRedirecting: boolean;
		Number: string;
		Redelivery: string;
		RedeliverySum: string;
		RedeliveryNum: string;
		RedeliveryPayer: string;
		OwnerDocumentType: string;
		LastCreatedOnTheBasisDocumentType: string;
		LastCreatedOnTheBasisPayerType: string;
		LastCreatedOnTheBasisDateTime: string;
		LastTransactionStatusGM: string;
		LastTransactionDateTimeGM: string;
		LastAmountTransferGM: string;
		DateCreated: string;
		DocumentWeight: string;
		FactualWeight: string;
		VolumeWeight: string;
		CheckWeight: string;
		CheckWeightMethod: string;
		DocumentCost: string;
		CalculatedWeight: string;
		SumBeforeCheckWeight: string;
		PayerType: string;
		RecipientFullName: string;
		RecipientDateTime: string;
		ScheduledDeliveryDate: string;
		PaymentMethod: string;
		CargoDescriptionString: string;
		CargoType: string;
		CitySender: string;
		CityRecipient: string;
		WarehouseRecipient: string;
		CounterpartyType: string;
		AfterpaymentOnGoodsCost: string;
		ServiceType: string;
		UndeliveryReasonsSubtypeDescription: string;
		WarehouseRecipientNumber: string;
		LastCreatedOnTheBasisNumber: string;
		PhoneRecipient: string;
		RecipientFullNameEW: string;
		WarehouseRecipientInternetAddressRef: string;
		MarketplacePartnerToken: string;
		ClientBarcode: string;
		RecipientAddress: string;
		CounterpartyRecipientDescription: string;
		CounterpartySenderType: string;
		DateScan: string;
		PaymentStatus: string;
		PaymentStatusDate: string;
		AmountToPay: string;
		AmountPaid: string;
		Status: string;
		StatusCode: string;
		RefEW: string;
		BackwardDeliverySubTypesActions: string;
		BackwardDeliverySubTypesServices: string;
		UndeliveryReasons: string;
		DatePayedKeeping: string;
		InternationalDeliveryType: string;
		SeatsAmount: string;
		CardMaskedNumber: string;
		ExpressWaybillPaymentStatus: string;
		ExpressWaybillAmountToPay: string;
		PhoneSender: string;
		TrackingUpdateDate: string;
		WarehouseSender: string;
		DateReturnCargo: string;
		DateMoving: string;
		DateFirstDayStorage: string;
		RefCityRecipient: string;
		RefCitySender: string;
		RefSettlementRecipient: string;
		RefSettlementSender: string;
		SenderAddress: string;
		SenderFullNameEW: string;
		AnnouncedPrice: string;
		AdditionalInformationEW: string;
		ActualDeliveryDate: string;
		PostomatV3CellReservationNumber: string;
		OwnerDocumentNumber: string;
		LastAmountReceivedCommissionGM: string;
		DeliveryTimeframe: string;
		CreatedOnTheBasis: string;
		UndeliveryReasonsDate: string;
		RecipientWarehouseTypeRef: string;
		WarehouseRecipientRef: string;
		CategoryOfWarehouse: string;
		WarehouseRecipientAddress: string;
		WarehouseSenderInternetAddressRef: string;
		WarehouseSenderAddress: string;
		AviaDelivery: string;
		BarcodeRedBox: string;
		CargoReturnRefusal: string;
		DaysStorageCargo: string;
		Packaging: any[] | null;
		PartialReturnGoods: any[] | null;
		SecurePayment: string;
		PossibilityChangeCash2Card: boolean;
		PossibilityChangeDeliveryIntervals: boolean;
		PossibilityTermExtensio: boolean;
		StorageAmount: string;
		StoragePrice: string;
		FreeShipping: string;
		LoyaltyCardRecipient: string;
	}>
}

export const getStatusDocuments = async (apiToken: string, props: {
	Documents: Array<{
		DocumentNumber: string;
		Phone: string;
	}>
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getStatusDocuments',
	methodProperties: props
})) as i_getStatusDocuments_result;
