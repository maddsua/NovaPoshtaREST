import { i_np_response, mkRestRequest } from "../util.js";
import type { i_generic_RefDesc_Response } from "../util.types.js";

const sharedProps = {
	modelName: 'Common'
};


/* METHOD: getTimeIntervals */

interface i_getTimeIntervals_result extends i_np_response {
	data: Array<{
		Number: string;
		Start: string;
		End: string;
	}>
}

export const getTimeIntervals = async (apiToken: string, props: {
	RecipientCityRef: string;
	DateTime?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getTimeIntervals',
	methodProperties: props
})) as i_getTimeIntervals_result;


/* METHOD: getCargoTypes */

interface i_getCargoTypes_result extends i_np_response {
	data: Array<i_generic_RefDesc_Response>
}

export const getCargoTypes = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getCargoTypes',
	methodProperties: {}
})) as i_getCargoTypes_result;


/* METHOD: getBackwardDeliveryCargoTypes */

interface i_getBackwardDeliveryCargoTypes_result extends i_np_response {
	data: Array<i_generic_RefDesc_Response>
}

export const getBackwardDeliveryCargoTypes = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getBackwardDeliveryCargoTypes',
	methodProperties: {}
})) as i_getBackwardDeliveryCargoTypes_result;


/* METHOD: getPalletsList */

interface i_getPalletsList_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		DescriptionRu: string;
		Weight: string;
	}>
}

export const getPalletsList = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getPalletsList',
	methodProperties: {}
})) as i_getPalletsList_result;


/* METHOD: getTypesOfPayersForRedelivery */

interface i_getTypesOfPayersForRedelivery_result extends i_np_response {
	data: Array<i_generic_RefDesc_Response>
}

export const getTypesOfPayersForRedelivery = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getTypesOfPayersForRedelivery',
	methodProperties: {}
})) as i_getTypesOfPayersForRedelivery_result;


/* METHOD: getPackList */

interface i_getPackList_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		DescriptionRu: string;
		Length: string;
		Width: string;
		Height: string;
		VolumetricWeight: string;
		TypeOfPacking: string;
	}>
}

export const getPackList = async (apiToken: string, props: {
	Lengthstring?: string;
	Widthstring?: string;
	Heightstring?: string;
	VolumetricWeightstring?: string;
	TypeOfPackingstring?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getPackList',
	methodProperties: props
})) as i_getPackList_result;


/* METHOD: getTiresWheelsList */

interface i_getTiresWheelsList_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		DescriptionRu: string;
		Weight: string;
		DescriptionType: string;
	}>
}

export const getTiresWheelsList = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getTiresWheelsList',
	methodProperties: {}
})) as i_getTiresWheelsList_result;


/* METHOD: getCargoDescriptionList */

interface i_getCargoDescriptionList_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		DescriptionRu: string;
	}>
}

export const getCargoDescriptionList = async (apiToken: string, props: {
	FindByString?: string;
	Page?: string;
}) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getCargoDescriptionList',
	methodProperties: props
})) as i_getCargoDescriptionList_result;


/* METHOD: getMessageCodeText */

interface i_getMessageCodeText_result extends i_np_response {
	data: Array<{
		MessageCode: string;
		MessageText: string;
		MessageDescriptionRU: string;
		MessageDescriptionUA: string;
	}>
}

export const getMessageCodeText = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getMessageCodeText',
	methodProperties: {}
})) as i_getMessageCodeText_result;


/* METHOD: getServiceTypes */

interface i_getServiceTypes_result extends i_np_response {
	data: Array<i_generic_RefDesc_Response>
}

export const getServiceTypes = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getServiceTypes',
	methodProperties: {}
})) as i_getServiceTypes_result;


/* METHOD: getOwnershipFormsList */

interface i_getOwnershipFormsList_result extends i_np_response {
	data: Array<{
		Ref: string;
		Description: string;
		FullName: string;
	}>
}

export const getOwnershipFormsList = async (apiToken: string) => await mkRestRequest(Object.assign(sharedProps, {
	apiKey: apiToken,
	calledMethod: 'getOwnershipFormsList',
	methodProperties: {}
})) as i_getOwnershipFormsList_result;
