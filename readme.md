# Typings and functional interface for Nova Poshta (Нова Пошта) REST API

This package provides typing and functions to call Nova Poshta api methods.

Currently supporting NodeJS in ESM mode. Actually, Deno too, but we need to get rid of node-fetch for it.

Official API references are here: https://developers.novaposhta.ua/documentation

## Status

The package is in early stage and is not thoroughly tested. Bugs and inconsistencies may occur. Any contribution is appreciated.

## Submodules

Import them like this:

```typescript
import { getStatusDocuments } from 'novaposhtarest/TrackingDocument'
```

Submodules list:

<details>
	<summary>✅ Address</summary>
  
- ✅ searchSettlements
- ✅ searchSettlementStreets
- ✅ save
- ✅ delete
- ✅ update
- ✅ getSettlements
- ✅ getCities
- ✅ getAreas
- ✅ getWarehouses
- ✅ getWarehouseTypes
- ✅ getStreet
  
</details>

<details>
	<summary>✅ Counterparty</summary>
  
- ✅ save
- ✅ delete
- ✅ update
- ✅ getCounterpartyAddresses
- ✅ getCounterpartyOptions
- ✅ getCounterpartyContactPersons
- ✅ getCounterparties
  
</details>

<details>
	<summary>✅ ContactPerson</summary>
  
- ✅ save
- ✅ delete
- ✅ update
  
</details>

<details>
	<summary>✅ ScanSheet</summary>
  
- ✅ insertDocuments
- ✅ getScanSheet
- ✅ getScanSheetList
- ✅ deleteScanSheet
- ✅ removeDocuments
  
</details>

<details>
	<summary>✅ Common</summary>
  
- ✅ getTimeIntervals
- ✅ getCargoTypes
- ✅ getBackwardDeliveryCargoTypes
- ✅ getPalletsList
- ✅ getTypesOfPayersForRedelivery
- ✅ getPackList
- ✅ getTiresWheelsList
- ✅ getCargoDescriptionList
- ✅ getMessageCodeText
- ✅ getServiceTypes
- ✅ getOwnershipFormsList
  
</details>


⏳ AdditionalService

<details>
	<summary>✅ InternetDocument</summary>
  
- ✅ getDocumentPrice
- ✅ getDocumentDeliveryDate
- ✅ save
- ✅ update
- ✅ delete
- ✅ getDocumentList
- ✅ generateReport
  
</details>

<details>
	<summary>✅ TrackingDocument</summary>
  
- ✅ getStatusDocuments
  
</details>
<br>

## Examples

Before running any examples, compile the project by running `tsc` or `npm run build` in it's root directory
