# Typings and functional interface for Nova Poshta (Нова Пошта) REST API

This package provides typing and functions to call Nova Poshta api methods.

Currently supporting NodeJS in ESM mode and Deno. From the same npm package 🤘

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

<details>
	<summary>✅ AdditionalService</summary>
  
- ✅ CheckPossibilityCreateReturn
- ✅ getReturnReasons
- ✅ getReturnReasonsSubtypes
- ✅ orderCargoReturn
- ✅ getReturnOrdersList
- ✅ deleteAdditionalService
- ✅ CheckPossibilityChangeEW
- ✅ getChangeEWOrdersList
- ✅ checkPossibilityForRedirecting
- ✅ getRedirectionOrdersList
- ✅ getOwnershipFormsList
  
</details>

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

## Compatibility

You can use this single package with NodeJS, Deno and Cloudflare Workers (not a runtime, but in this case it matters).

If you're building for NodeJS 18 and newer or CF Wrokers, use the normal import:

```typescript
import { getStatusDocuments } from 'novaposhtarest/TrackingDocument'
```

For older versions of Node that don't support the fetch API, use `compat` branch (just add `compat/` after the package name):

```typescript
import { getStatusDocuments } from 'novaposhtarest/compat/TrackingDocument'
```

And for the cool bois who use Deno, do it like this:

```typescript
import { getStatusDocuments } from './node_modules/novaposhtarest/dist/deno/models/TrackingDocument.ts'
```

Yeah, not very pretty but heeey

## Examples

### Ex. 1: Retrieve delivery status

Your code (NodeJS + TSC or CF Workers):

```typescript

import { getStatusDocuments } from 'novaposhtarest/TrackingDocument'

const token = process.env['NPTOKEN']

const { success, data, errors } = await getStatusDocuments(token, {
	Documents: [
		{
			DocumentNumber: '20000000000000',
			Phone: '+380960000000'
		}
	]
})

console.log(success ? data[0].Status : errors)

```

Output:

```javascript
[
  {
    Number: "20000000000000",
    StatusCode: "0000",
    Status: "Test status",
    PossibilityCreateRedirecting: false,
    PossibilityCreateReturn: false,     
    PossibilityCreateRefusal: false,    
    PossibilityChangeEW: false,
...
```

### Ex. 2: Get list of geographic areas

Your code (NodeJS + TSC or CF Workers):

```typescript

import { getAreas } from 'novaposhtarest/Address'

//	works without api token for now
const { success, data, errors } = await getAreas('')

console.log(success ? data : errors)

```

Output:

```javascript
[
  {
    Ref: "71508128-9b87-11de-822f-000c2965ae0e",
    AreasCenter: "db5c88b7-391c-11dd-90d9-001a92567626",
    DescriptionRu: "АРК",
    Description: "АРК"
  },
  {
    Ref: "71508129-9b87-11de-822f-000c2965ae0e",
    AreasCenter: "db5c88de-391c-11dd-90d9-001a92567626",
    DescriptionRu: "Винницкая",
    Description: "Вінницька"
  },
...
```

### Ex. 3: Find city

Your code (Deno):

```typescript

import "https://deno.land/x/dotenv@v3.2.2/load.ts"

import { Address } from './node_modules/novaposhtarest/dist/deno/index.ts'

const nptoken = Deno.env.get('NOVAPOSHTA') as string

const { success, data, errors } = await Address.getCities(nptoken, {
	FindByString: 'Харьков'
})

console.log(success ? data : errors)

```

Output:

```javascript
[
  {
    Description: "Харків",
    DescriptionRu: "Харьков",
    Ref: "db5c88e0-391c-11dd-90d9-001a92567626",
    Delivery1: "1",
    Delivery2: "1",
    Delivery3: "1",
    Delivery4: "1",
    Delivery5: "1",
    Delivery6: "1",
    Delivery7: "1",
    Area: "7150813b-9b87-11de-822f-000c2965ae0e",
    SettlementType: "563ced10-f210-11e3-8c4a-0050568002cf",
    IsBranch: "1",
    PreventEntryNewStreetsUser: "0",
    CityID: "13",
    SettlementTypeDescription: "місто",
    SettlementTypeDescriptionRu: "город",
    SpecialCashCheck: 1,
    AreaDescription: "Харківська",
    AreaDescriptionRu: "Харьковская"
  },
...
```