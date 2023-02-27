# UNDER CONSTRUCTION, ONLY FIRST PART OF API IS INCORPORATED
## RenewedVision ProPresenter API wrapper

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

[propresenter.ts:10](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L10)

## Properties

### ip

• **ip**: `string`

#### Defined in

[propresenter.ts:7](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L7)

___

### port

• **port**: `number`

#### Defined in

[propresenter.ts:8](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L8)

## Methods

### announcementActiveFocus

▸ **announcementActiveFocus**(): `JSONValue`

Focuses the currently active announcement presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:86](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L86)

___

### announcementActiveIndexTrigger

▸ **announcementActiveIndexTrigger**(`index`): `JSONValue`

Triggers the specified cue in the currently active announcement presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` \| `number` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:117](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L117)

___

### announcementActiveTimelineOperation

▸ **announcementActiveTimelineOperation**(`operation`): `JSONValue`

Performs the requested timeline operation for the active announcment presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation` | `any` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:127](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L127)

___

### announcementGetActive

▸ **announcementGetActive**(): `JSONValue`

Requests the currently active announcement presentation.

#### Returns

`JSONValue`

the currently active announcement presentation.

#### Defined in

[propresenter.ts:73](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L73)

___

### announcementGetActiveTimelineOperation

▸ **announcementGetActiveTimelineOperation**(): `JSONValue`

Requests the current state of the active announcement timeline.

#### Returns

`JSONValue`

The current state of the active announcement timeline.

#### Defined in

[propresenter.ts:137](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L137)

___

### announcementGetSlideIndex

▸ **announcementGetSlideIndex**(): `JSONValue`

Requests the index of the current slide/cue within the currently active announcement.

#### Returns

`JSONValue`

The index of the current slide/cue within the currently active announcement.

#### Defined in

[propresenter.ts:80](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L80)

___

### announcementNextTrigger

▸ **announcementNextTrigger**(): `JSONValue`

Triggers the next cue in the active announcement presentation (if there is one).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:98](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L98)

___

### announcementPreviousTrigger

▸ **announcementPreviousTrigger**(): `JSONValue`

Triggers the previous cue in the currently active announcement presentation (if there is one).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:107](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L107)

___

### announcementTrigger

▸ **announcementTrigger**(): `JSONValue`

Retriggers the currently active announcement presentation (starts from the beginning).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:92](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L92)

___

### audioGetPlaylists

▸ **audioGetPlaylists**(): `JSONValue`

Requests a list with all the configured audio playlists.

#### Returns

`JSONValue`

a list with all the configured audio playlists.

#### Defined in

[propresenter.ts:148](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L148)

___

### audioGetPlaylistsActive

▸ **audioGetPlaylistsActive**(): `JSONValue`

Requests the currently active audio playlist

#### Returns

`JSONValue`

The currently active audio playlist

#### Defined in

[propresenter.ts:184](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L184)

___

### audioGetPlaylistsByPlaylistId

▸ **audioGetPlaylistsByPlaylistId**(`playlist_id`): `JSONValue`

Requests a list of all the audio items in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`JSONValue`

a list of all the audio items in the specified audio playlist.

#### Defined in

[propresenter.ts:156](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L156)

___

### audioGetPlaylistsByPlaylistIdUpdates

▸ **audioGetPlaylistsByPlaylistIdUpdates**(`playlist_id`): `JSONValue`

Requests a chunked data update every time the specified audio playlist changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`JSONValue`

a chunked data update every time the specified audio playlist changes.

#### Defined in

[propresenter.ts:167](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L167)

___

### audioGetPlaylistsFocused

▸ **audioGetPlaylistsFocused**(): `JSONValue`

Requests the currently focused audio playlist

#### Returns

`JSONValue`

The currently focused audio playlist

#### Defined in

[propresenter.ts:177](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L177)

___

### audioPlaylistsActiveFocus

▸ **audioPlaylistsActiveFocus**(): `JSONValue`

Focuses the active audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:205](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L205)

___

### audioPlaylistsActiveIdTrigger

▸ **audioPlaylistsActiveIdTrigger**(`id`): `JSONValue`

Triggers the specified item in the active audio playlist.

**`Params`**

id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:296](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L296)

___

### audioPlaylistsActiveNextTrigger

▸ **audioPlaylistsActiveNextTrigger**(): `JSONValue`

Triggers the next item in the active audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:277](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L277)

___

### audioPlaylistsActiveTrigger

▸ **audioPlaylistsActiveTrigger**(): `JSONValue`

Triggers the active audio playlist (restarts from the beginning).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:230](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L230)

___

### audioPlaylistsActivedPreviousTrigger

▸ **audioPlaylistsActivedPreviousTrigger**(): `JSONValue`

Triggers the previous item in the active audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:286](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L286)

___

### audioPlaylistsByPlaylistIdFocus

▸ **audioPlaylistsByPlaylistIdFocus**(`playlist_id`): `JSONValue`

Focuses the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:212](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L212)

___

### audioPlaylistsByPlaylistIdNextTrigger

▸ **audioPlaylistsByPlaylistIdNextTrigger**(`playlist_id`): `JSONValue`

Triggers the next item in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:306](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L306)

___

### audioPlaylistsByPlaylistIdPreviousTrigger

▸ **audioPlaylistsByPlaylistIdPreviousTrigger**(`playlist_id`): `JSONValue`

Triggers the previous item in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:316](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L316)

___

### audioPlaylistsByPlaylistIdTrigger

▸ **audioPlaylistsByPlaylistIdTrigger**(`playlist_id`): `JSONValue`

Triggers the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:240](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L240)

___

### audioPlaylistsFocusedIdTrigger

▸ **audioPlaylistsFocusedIdTrigger**(`id`): `JSONValue`

Triggers the specified item in the focused audio playlist.

**`Params`**

id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:268](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L268)

___

### audioPlaylistsFocusedNextTrigger

▸ **audioPlaylistsFocusedNextTrigger**(): `JSONValue`

Triggers the next item in the focused audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:249](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L249)

___

### audioPlaylistsFocusedPreviousTrigger

▸ **audioPlaylistsFocusedPreviousTrigger**(): `JSONValue`

Triggers the previous item in the focused audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:258](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L258)

___

### audioPlaylistsFocusedTrigger

▸ **audioPlaylistsFocusedTrigger**(): `JSONValue`

Triggers the focused audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:221](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L221)

___

### audioPlaylistsNextFocus

▸ **audioPlaylistsNextFocus**(): `JSONValue`

Focuses the next audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:190](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L190)

___

### audioPlaylistsPreviousFocus

▸ **audioPlaylistsPreviousFocus**(): `JSONValue`

Focuses the previous audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:196](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L196)

___

### getDataFromProPresenter

▸ **getDataFromProPresenter**(`path`, `userOptions`): `JSONValue`

API wrapper function, use fetch to send/retrieve the data from ProPresenter

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `userOptions` | `any` |

#### Returns

`JSONValue`

Promise from fetch

#### Defined in

[propresenter.ts:22](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L22)

___

### version

▸ **version**(): `JSONValue`

Requests the general information about the currently active ProPresenter instance

#### Returns

`JSONValue`

General information about the currently active ProPresenter instance

#### Defined in

[propresenter.ts:61](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/a05df53/src/propresenter.ts#L61)
