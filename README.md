# RenewedVision ProPresenter API wrapper

Typescript wrapper for Node.js.

## Installation

```sh
yarn add renewedvision-propresenter
```

## Usage

```js
import { ProPresenter } from 'renewedvision-propresenter'

ProPresenter.version().then((result) => {
	console.log(result)
})
```

## API

### Constructors

- [constructor](README.md#constructor)

### Properties

- [ip](README.md#ip)
- [port](README.md#port)

### Methods

- [announcementActiveFocus](README.md#announcementactivefocus)
- [announcementActiveIndexTrigger](README.md#announcementactiveindextrigger)
- [announcementActiveTimelineOperation](README.md#announcementactivetimelineoperation)
- [announcementGetActive](README.md#announcementgetactive)
- [announcementGetActiveTimelineOperation](README.md#announcementgetactivetimelineoperation)
- [announcementGetSlideIndex](README.md#announcementgetslideindex)
- [announcementNextTrigger](README.md#announcementnexttrigger)
- [announcementPreviousTrigger](README.md#announcementprevioustrigger)
- [announcementTrigger](README.md#announcementtrigger)
- [audioGetPlaylists](README.md#audiogetplaylists)
- [audioGetPlaylistsActive](README.md#audiogetplaylistsactive)
- [audioGetPlaylistsByPlaylistId](README.md#audiogetplaylistsbyplaylistid)
- [audioGetPlaylistsByPlaylistIdUpdates](README.md#audiogetplaylistsbyplaylistidupdates)
- [audioGetPlaylistsFocused](README.md#audiogetplaylistsfocused)
- [audioPlaylistsActiveFocus](README.md#audioplaylistsactivefocus)
- [audioPlaylistsActiveIdTrigger](README.md#audioplaylistsactiveidtrigger)
- [audioPlaylistsActiveNextTrigger](README.md#audioplaylistsactivenexttrigger)
- [audioPlaylistsActiveTrigger](README.md#audioplaylistsactivetrigger)
- [audioPlaylistsActivedPreviousTrigger](README.md#audioplaylistsactivedprevioustrigger)
- [audioPlaylistsByPlaylistIdFocus](README.md#audioplaylistsbyplaylistidfocus)
- [audioPlaylistsByPlaylistIdNextTrigger](README.md#audioplaylistsbyplaylistidnexttrigger)
- [audioPlaylistsByPlaylistIdPreviousTrigger](README.md#audioplaylistsbyplaylistidprevioustrigger)
- [audioPlaylistsByPlaylistIdTrigger](README.md#audioplaylistsbyplaylistidtrigger)
- [audioPlaylistsFocusedIdTrigger](README.md#audioplaylistsfocusedidtrigger)
- [audioPlaylistsFocusedNextTrigger](README.md#audioplaylistsfocusednexttrigger)
- [audioPlaylistsFocusedPreviousTrigger](README.md#audioplaylistsfocusedprevioustrigger)
- [audioPlaylistsFocusedTrigger](README.md#audioplaylistsfocusedtrigger)
- [audioPlaylistsNextFocus](README.md#audioplaylistsnextfocus)
- [audioPlaylistsPreviousFocus](README.md#audioplaylistspreviousfocus)
- [getDataFromProPresenter](README.md#getdatafrompropresenter)
- [version](README.md#version)

## Constructors

### constructor

• **new ProPresenter**(`ip`, `port`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |
| `port` | `number` |

#### Defined in

[propresenter.ts:5](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L5)

## Properties

### ip

• **ip**: `string`

#### Defined in

[propresenter.ts:2](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L2)

___

### port

• **port**: `number`

#### Defined in

[propresenter.ts:3](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L3)

## Methods

### announcementActiveFocus

▸ **announcementActiveFocus**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Focuses the currently active announcement presentation.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:84](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L84)

___

### announcementActiveIndexTrigger

▸ **announcementActiveIndexTrigger**(`index`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the specified cue in the currently active announcement presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:115](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L115)

___

### announcementActiveTimelineOperation

▸ **announcementActiveTimelineOperation**(`operation`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Performs the requested timeline operation for the active announcment presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:125](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L125)

___

### announcementGetActive

▸ **announcementGetActive**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests the currently active announcement presentation.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

the currently active announcement presentation.

#### Defined in

[propresenter.ts:71](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L71)

___

### announcementGetActiveTimelineOperation

▸ **announcementGetActiveTimelineOperation**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests the current state of the active announcement timeline.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

The current state of the active announcement timeline.

#### Defined in

[propresenter.ts:135](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L135)

___

### announcementGetSlideIndex

▸ **announcementGetSlideIndex**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests the index of the current slide/cue within the currently active announcement.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

The index of the current slide/cue within the currently active announcement.

#### Defined in

[propresenter.ts:78](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L78)

___

### announcementNextTrigger

▸ **announcementNextTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the next cue in the active announcement presentation (if there is one).

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:96](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L96)

___

### announcementPreviousTrigger

▸ **announcementPreviousTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the previous cue in the currently active announcement presentation (if there is one).

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:105](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L105)

___

### announcementTrigger

▸ **announcementTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Retriggers the currently active announcement presentation (starts from the beginning).

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:90](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L90)

___

### audioGetPlaylists

▸ **audioGetPlaylists**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests a list with all the configured audio playlists.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

a list with all the configured audio playlists.

#### Defined in

[propresenter.ts:146](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L146)

___

### audioGetPlaylistsActive

▸ **audioGetPlaylistsActive**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests the currently active audio playlist

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

The currently active audio playlist

#### Defined in

[propresenter.ts:182](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L182)

___

### audioGetPlaylistsByPlaylistId

▸ **audioGetPlaylistsByPlaylistId**(`playlist_id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests a list of all the audio items in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

a list of all the audio items in the specified audio playlist.

#### Defined in

[propresenter.ts:154](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L154)

___

### audioGetPlaylistsByPlaylistIdUpdates

▸ **audioGetPlaylistsByPlaylistIdUpdates**(`playlist_id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests a chunked data update every time the specified audio playlist changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

a chunked data update every time the specified audio playlist changes.

#### Defined in

[propresenter.ts:165](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L165)

___

### audioGetPlaylistsFocused

▸ **audioGetPlaylistsFocused**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests the currently focused audio playlist

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

The currently focused audio playlist

#### Defined in

[propresenter.ts:175](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L175)

___

### audioPlaylistsActiveFocus

▸ **audioPlaylistsActiveFocus**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Focuses the active audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:203](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L203)

___

### audioPlaylistsActiveIdTrigger

▸ **audioPlaylistsActiveIdTrigger**(`id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the specified item in the active audio playlist.

**`Params`**

id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:294](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L294)

___

### audioPlaylistsActiveNextTrigger

▸ **audioPlaylistsActiveNextTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the next item in the active audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:275](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L275)

___

### audioPlaylistsActiveTrigger

▸ **audioPlaylistsActiveTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the active audio playlist (restarts from the beginning).

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:228](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L228)

___

### audioPlaylistsActivedPreviousTrigger

▸ **audioPlaylistsActivedPreviousTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the previous item in the active audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:284](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L284)

___

### audioPlaylistsByPlaylistIdFocus

▸ **audioPlaylistsByPlaylistIdFocus**(`playlist_id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Focuses the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:210](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L210)

___

### audioPlaylistsByPlaylistIdNextTrigger

▸ **audioPlaylistsByPlaylistIdNextTrigger**(`playlist_id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the next item in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:304](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L304)

___

### audioPlaylistsByPlaylistIdPreviousTrigger

▸ **audioPlaylistsByPlaylistIdPreviousTrigger**(`playlist_id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the previous item in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:314](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L314)

___

### audioPlaylistsByPlaylistIdTrigger

▸ **audioPlaylistsByPlaylistIdTrigger**(`playlist_id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:238](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L238)

___

### audioPlaylistsFocusedIdTrigger

▸ **audioPlaylistsFocusedIdTrigger**(`id`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the specified item in the focused audio playlist.

**`Params`**

id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:266](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L266)

___

### audioPlaylistsFocusedNextTrigger

▸ **audioPlaylistsFocusedNextTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the next item in the focused audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:247](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L247)

___

### audioPlaylistsFocusedPreviousTrigger

▸ **audioPlaylistsFocusedPreviousTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the previous item in the focused audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:256](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L256)

___

### audioPlaylistsFocusedTrigger

▸ **audioPlaylistsFocusedTrigger**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Triggers the focused audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:219](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L219)

___

### audioPlaylistsNextFocus

▸ **audioPlaylistsNextFocus**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Focuses the next audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:188](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L188)

___

### audioPlaylistsPreviousFocus

▸ **audioPlaylistsPreviousFocus**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Focuses the previous audio playlist.

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

#### Defined in

[propresenter.ts:194](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L194)

___

### getDataFromProPresenter

▸ **getDataFromProPresenter**(`path`, `userOptions`): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

API wrapper function, use fetch to send/retrieve the data from ProPresenter

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `userOptions` | `any` |

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Promise from fetch

#### Defined in

[propresenter.ts:17](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L17)

___

### version

▸ **version**(): `Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

Requests the general information about the currently active ProPresenter instance

#### Returns

`Promise`<`any`\> \| { `error`: `string` = "Missing IP and/or Port." }

General information about the currently active ProPresenter instance

#### Defined in

[propresenter.ts:59](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/4d50e9d/src/propresenter.ts#L59)

