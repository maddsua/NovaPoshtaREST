# Generic examples

## Ex. 1: Retrieve delivery status

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

## Ex. 2: Get list of geographic areas

```typescript

import { getAreas } from 'novaposhtarest/Address'

//	works without api token for now
const { success, data, errors } = await getAreas('')

console.log(success ? data : errors)

```