import { i_np_response, mkRestRequest } from "../util.js";
import type { i_physical_size, i_workingschedule } from "../util.types.js";

const sharedProps = {
	modelName: 'Address'
};


/* METHOD: searchSettlements */

interface i_searchSettlements_result extends i_np_response {
	data: Array<{
		TotalCount: string;
		Addresses: Array<{
			Warehouses: string;
			MainDescription: string;
			Area: string;
			Region: string;
			SettlementTypeCode: string;
			Ref: string;
			DeliveryCity: string;
		}>;
		Warehouses: string;
		MainDescription: string;
		Area: string;
		Region: string;
		SettlementTypeCode: string;
		Ref: string;
		DeliveryCity: string;
	}>
}

export const searchSettlements = async (apiToken: string, props: {
	CityName: string;
	Limit: string;
	Page: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'searchSettlements',
	methodProperties: props
})) as i_searchSettlements_result;


/* METHOD: searchSettlementStreets */

interface i_searchSettlementStreets_result extends i_np_response {
	data: Array<{
		TotalCount: string;
		SettlementRef: string;
		SettlementStreetRef: string;
		SettlementStreetDescription: string;
		Present: string;
		StreetsType: string;
		StreetsTypeDescription: string;
		Location: string;
	}>
}

export const searchSettlementStreets = async (apiToken: string, props: {
	StreetName: string;
	SettlementRef: string;
	Limit?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'searchSettlementStreets',
	methodProperties: props
})) as i_searchSettlementStreets_result;


/* METHOD: save */

interface i_save_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
	}>
}

export const saveAddress = async (apiToken: string, props: {
	CounterpartyRef: string;
	StreetRef: string;
	BuildingNumber: string;
	Flat: string;
	Note?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'save',
	methodProperties: props
})) as i_save_result;


/* METHOD: delete */

interface i_delete_result extends i_np_response {
	data: Array<{ Ref: string }>
}

export const deleteAddress = async (apiToken: string, props: {
	Ref: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'delete',
	methodProperties: props
})) as i_delete_result;


/* METHOD: update */

export const updateAddress = async (apiToken: string, props: {
	Ref: string;
	CounterpartyRef: string;
	StreetRef: string;
	BuildingNumber: string;
	Flat: string;
	Note?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'update',
	methodProperties: props
})) as i_save_result;


/* METHOD: getSettlements */

interface i_getSettlements_result extends i_np_response {
	data: Array<{
		Ref: string;
		SettlementType: string;
		Latitude: string;
		Longitude: string;
		Description: string;
		DescriptionRu: string;
		SettlementTypeDescription: string;
		SettlementTypeDescriptionRu: string;
		Region: string;
		RegionsDescription: string;
		RegionsDescriptionRu: string;
		Area: string;
		AreaDescription: string;
		AreaDescriptionRu: string;
		Index1: string;
		Index2: string;
		IndexCOATSU1: string;
		Delivery1: string;
		Delivery2: string;
		Delivery3: string;
		Delivery4: string;
		Delivery5: string;
		Delivery6: string;
		Delivery7: string;
		Warehouse: string;
		Conglomerates: string[];
	}>
}

export const getSettlements = async (apiToken: string, props: {
	AreaRef?: string;
	Ref?: string;
	RegionRef?: string;
	Page?: string;
	Warehouse?: string;
	FindByString?: string;
	Limit?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getSettlements',
	methodProperties: props
})) as i_getSettlements_result;


/* METHOD: getCities */

interface i_getCities_result extends i_np_response {
	data: Array<{
		Description: string;
		DescriptionRu: string;
		Ref: string;
		Delivery1: string;
		Delivery2: string;
		Delivery3: string;
		Delivery4: string;
		Delivery5: string;
		Delivery6: string;
		Delivery7: string;
		Area: string;
		SettlementType: string;
		IsBranch: string;
		PreventEntryNewStreetsUser: string;
		Conglomerates: string;
		CityID: string;
		SettlementTypeDescriptionRu: string;
		SettlementTypeDescription: string;
	}>
}

export const getCities = async (apiToken: string, props: {
	Ref?: string;
	Page?: string;
	FindByString?: string;
	Limit?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getCities',
	methodProperties: props
})) as i_getCities_result;


/* METHOD: getAreas */

interface i_getAreas_result extends i_np_response {
	data: Array<{
		Ref: string;
		AreasCenter: string;
		Description: string;
		DescriptionRu: string;
	}>
}

export const getAreas = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getAreas',
	methodProperties: {}
})) as i_getAreas_result;


/* METHOD: getWarehouses */

interface i_getWarehouses_result extends i_np_response {
	data: Array<{
		SiteKey: string;
		Description: string;
		DescriptionRu: string;
		ShortAddress: string;
		ShortAddressRu: string;
		Phone: string;
		TypeOfWarehouse: string;
		Ref: string;
		Number: string;
		CityRef: string;
		CityDescription: string;
		CityDescriptionRu: string;
		SettlementRef: string;
		SettlementDescription: string;
		SettlementAreaDescription: string;
		SettlementRegionsDescription: string;
		SettlementTypeDescription: string;
		SettlementTypeDescriptionRu: string;
		Longitude: number;
		Latitude: number;
		PostFinance: string;
		BicycleParking: string;
		PaymentAccess: string;
		POSTerminal: string;
		InternationalShipping: string;
		SelfServiceWorkplacesCount: string;
		TotalMaxWeightAllowed: string;
		PlaceMaxWeightAllowed: string;
		SendingLimitationsOnDimensions: i_physical_size;
		ReceivingLimitationsOnDimensions: i_physical_size;
		Reception: i_workingschedule;
		Delivery: i_workingschedule;
		Schedule: i_workingschedule;
		DistrictCode: string;
		WarehouseStatus: string;
		WarehouseStatusDate: string;
		CategoryOfWarehouse: string;
		RegionCity: string;
		WarehouseForAgent: string;
		MaxDeclaredCost: string;
		DenyToSelect: string;
		PostMachineType: string;
		PostalCodeUA: string;
		OnlyReceivingParcel: string;
		WarehouseIndex: string;
	}>
}

export const getWarehouses = async (apiToken: string, props: {
	CityName?: string;
	CityRef?: string;
	Page?: string;
	Limit?: string;
	Language?: string;
	TypeOfWarehouseRef?: string;
	WarehouseId?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getWarehouses',
	methodProperties: props
})) as i_getWarehouses_result;


/* METHOD: getWarehouseTypes */

interface i_getWarehouseTypes_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		DescriptionRu: string;
	}>
}

export const getWarehouseTypes = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getWarehouseTypes',
	methodProperties: {}
})) as i_getWarehouseTypes_result;


/* METHOD: getStreet */

interface i_getStreet_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		StreetsTypeRef: string;
		StreetsType: string;
	}>
}

export const getStreet = async (apiToken: string, props: {
	CityRef: string;
	FindByString: string;
	Page?: string;
	Limit?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getStreet',
	methodProperties: props
})) as i_getStreet_result;

