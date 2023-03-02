# UNDER CONSTRUCTION, ONLY FIRST PART OF API IS INCORPORATED
# POST COMMANDS AREN't INCULDED AT THIS POINT
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
	console.log(result);
	/*
		Example result;
		{
			"data":{"name":"MacBook-Pro","platform":"mac","os_version":"13.2.1","host_description":"ProPresenter 7.11","api_version":"v1"},
			"status":200,
			"command":"/version"}
	*/
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
- [captureEncodingsType](README.md#captureencodingstype)
- [captureGetStatus](README.md#capturegetstatus)
- [captureGetsettings](README.md#capturegetsettings)
- [captureOperation](README.md#captureoperation)
- [clearCreateGroup](README.md#clearcreategroup)
- [clearDeleteGroupId](README.md#cleardeletegroupid)
- [clearGetGroup](README.md#cleargetgroup)
- [clearGetGroupId](README.md#cleargetgroupid)
- [clearGetGroupIdIcon](README.md#cleargetgroupidicon)
- [clearGroupIdTrigger](README.md#cleargroupidtrigger)
- [clearLayer](README.md#clearlayer)
- [clearSetGroupId](README.md#clearsetgroupid)
- [clearSetGroupIdIcon](README.md#clearsetgroupidicon)
- [findMyMouse](README.md#findmymouse)
- [getDataFromProPresenter](README.md#getdatafrompropresenter)
- [groupsGet](README.md#groupsget)
- [libraryByIdPresentationIdCueTrigger](README.md#librarybyidpresentationidcuetrigger)
- [libraryByIdPresentationIdTrigger](README.md#librarybyidpresentationidtrigger)
- [libraryGet](README.md#libraryget)
- [libraryGetById](README.md#librarygetbyid)
- [lookCreate](README.md#lookcreate)
- [lookDeleteId](README.md#lookdeleteid)
- [lookGet](README.md#lookget)
- [lookGetCurrent](README.md#lookgetcurrent)
- [lookGetId](README.md#lookgetid)
- [lookIdTrigger](README.md#lookidtrigger)
- [lookSetCurrent](README.md#looksetcurrent)
- [lookSetId](README.md#looksetid)
- [marcosGet](README.md#marcosget)
- [marcosIdDelete](README.md#marcosiddelete)
- [marcosIdGet](README.md#marcosidget)
- [marcosIdSet](README.md#marcosidset)
- [marcosIdTriggerGet](README.md#marcosidtriggerget)
- [masksGet](README.md#masksget)
- [masksIdGet](README.md#masksidget)
- [masksIdThumbnailGet](README.md#masksidthumbnailget)
- [mediaByUUIDThumbnailsGet](README.md#mediabyuuidthumbnailsget)
- [mediaPlaylistActiveFocus](README.md#mediaplaylistactivefocus)
- [mediaPlaylistActiveGet](README.md#mediaplaylistactiveget)
- [mediaPlaylistActiveMediaIdTrigger](README.md#mediaplaylistactivemediaidtrigger)
- [mediaPlaylistActiveNextTrigger](README.md#mediaplaylistactivenexttrigger)
- [mediaPlaylistActivePreviousTrigger](README.md#mediaplaylistactiveprevioustrigger)
- [mediaPlaylistActiveTrigger](README.md#mediaplaylistactivetrigger)
- [mediaPlaylistByPlaylistIdGet](README.md#mediaplaylistbyplaylistidget)
- [mediaPlaylistByPlaylistIdUpdatesGet](README.md#mediaplaylistbyplaylistidupdatesget)
- [mediaPlaylistFocusedGet](README.md#mediaplaylistfocusedget)
- [mediaPlaylistFocusedMediaIdTrigger](README.md#mediaplaylistfocusedmediaidtrigger)
- [mediaPlaylistFocusedNextTrigger](README.md#mediaplaylistfocusednexttrigger)
- [mediaPlaylistFocusedPreviousTrigger](README.md#mediaplaylistfocusedprevioustrigger)
- [mediaPlaylistFocusedTrigger](README.md#mediaplaylistfocusedtrigger)
- [mediaPlaylistNextFocus](README.md#mediaplaylistnextfocus)
- [mediaPlaylistPlaylistIdFocus](README.md#mediaplaylistplaylistidfocus)
- [mediaPlaylistPlaylistIdMediaIdTrigger](README.md#mediaplaylistplaylistidmediaidtrigger)
- [mediaPlaylistPlaylistIdNextTrigger](README.md#mediaplaylistplaylistidnexttrigger)
- [mediaPlaylistPlaylistIdPreviousTrigger](README.md#mediaplaylistplaylistidprevioustrigger)
- [mediaPlaylistPlaylistIdTrigger](README.md#mediaplaylistplaylistidtrigger)
- [mediaPlaylistPreviousFocus](README.md#mediaplaylistpreviousfocus)
- [mediaPlaylistsGet](README.md#mediaplaylistsget)
- [messagesCreate](README.md#messagescreate)
- [messagesGet](README.md#messagesget)
- [messagesIdClear](README.md#messagesidclear)
- [messagesIdDelete](README.md#messagesiddelete)
- [messagesIdGet](README.md#messagesidget)
- [messagesIdSet](README.md#messagesidset)
- [messagesIdTrigger](README.md#messagesidtrigger)
- [playlistActiveAnnouncementFocus](README.md#playlistactiveannouncementfocus)
- [playlistActiveAnnouncementIndexTrigger](README.md#playlistactiveannouncementindextrigger)
- [playlistActiveAnnouncementTrigger](README.md#playlistactiveannouncementtrigger)
- [playlistActiveGet](README.md#playlistactiveget)
- [playlistActivePresentationFocus](README.md#playlistactivepresentationfocus)
- [playlistActivePresentationIndexTrigger](README.md#playlistactivepresentationindextrigger)
- [playlistActivePresentationTrigger](README.md#playlistactivepresentationtrigger)
- [playlistFocusedGet](README.md#playlistfocusedget)
- [playlistFocusedIndexTrigger](README.md#playlistfocusedindextrigger)
- [playlistFocusedNextTrigger](README.md#playlistfocusednexttrigger)
- [playlistFocusedPreviousTrigger](README.md#playlistfocusedprevioustrigger)
- [playlistFocusedTrigger](README.md#playlistfocusedtrigger)
- [playlistIdentifierFocus](README.md#playlistidentifierfocus)
- [playlistIdentifierIndexTrigger](README.md#playlistidentifierindextrigger)
- [playlistIdentifierNextTrigger](README.md#playlistidentifiernexttrigger)
- [playlistIdentifierPreviousTrigger](README.md#playlistidentifierprevioustrigger)
- [playlistIdentifierTrigger](README.md#playlistidentifiertrigger)
- [playlistIdentifierUpdates](README.md#playlistidentifierupdates)
- [playlistNextFocus](README.md#playlistnextfocus)
- [playlistPlaylistIdCreate](README.md#playlistplaylistidcreate)
- [playlistPlaylistIdGet](README.md#playlistplaylistidget)
- [playlistPlaylistIdSet](README.md#playlistplaylistidset)
- [playlistPreviousFocus](README.md#playlistpreviousfocus)
- [playlistsCreate](README.md#playlistscreate)
- [playlistsGet](README.md#playlistsget)
- [presentationActiveFocus](README.md#presentationactivefocus)
- [presentationActiveGet](README.md#presentationactiveget)
- [presentationActiveIndexTrigger](README.md#presentationactiveindextrigger)
- [presentationActiveNextTrigger](README.md#presentationactivenexttrigger)
- [presentationActivePreviousTrigger](README.md#presentationactiveprevioustrigger)
- [presentationActiveTimeline](README.md#presentationactivetimeline)
- [presentationActiveTimelineOperation](README.md#presentationactivetimelineoperation)
- [presentationActiveTrigger](README.md#presentationactivetrigger)
- [presentationChordChartGet](README.md#presentationchordchartget)
- [presentationChordChartUpdates](README.md#presentationchordchartupdates)
- [presentationFocusedGet](README.md#presentationfocusedget)
- [presentationFocusedIndexTrigger](README.md#presentationfocusedindextrigger)
- [presentationFocusedNextTrigger](README.md#presentationfocusednexttrigger)
- [presentationFocusedPreviousTrigger](README.md#presentationfocusedprevioustrigger)
- [presentationFocusedTimeline](README.md#presentationfocusedtimeline)
- [presentationFocusedTimelineOperation](README.md#presentationfocusedtimelineoperation)
- [presentationFocusedTrigger](README.md#presentationfocusedtrigger)
- [presentationNextFocus](README.md#presentationnextfocus)
- [presentationPreviousFocus](README.md#presentationpreviousfocus)
- [presentationSlideIndexGet](README.md#presentationslideindexget)
- [presentationUUIDFocus](README.md#presentationuuidfocus)
- [presentationUUIDFocusedTimelineOperation](README.md#presentationuuidfocusedtimelineoperation)
- [presentationUUIDGet](README.md#presentationuuidget)
- [presentationUUIDIndexTrigger](README.md#presentationuuidindextrigger)
- [presentationUUIDNextTrigger](README.md#presentationuuidnexttrigger)
- [presentationUUIDPreviousTrigger](README.md#presentationuuidprevioustrigger)
- [presentationUUIDThumbnailIndex](README.md#presentationuuidthumbnailindex)
- [presentationUUIDTrigger](README.md#presentationuuidtrigger)
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

[propresenter.ts:13](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L13)

## Properties

### ip

• **ip**: `string`

#### Defined in

[propresenter.ts:10](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L10)

___

### port

• **port**: `number`

#### Defined in

[propresenter.ts:11](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L11)

## Methods

### announcementActiveFocus

▸ **announcementActiveFocus**(): `JSONValue`

Focuses the currently active announcement presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:86](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L86)

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

[propresenter.ts:113](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L113)

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

[propresenter.ts:122](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L122)

___

### announcementGetActive

▸ **announcementGetActive**(): `JSONValue`

Requests the currently active announcement presentation.

#### Returns

`JSONValue`

the currently active announcement presentation.

#### Defined in

[propresenter.ts:73](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L73)

___

### announcementGetActiveTimelineOperation

▸ **announcementGetActiveTimelineOperation**(): `JSONValue`

Requests the current state of the active announcement timeline.

#### Returns

`JSONValue`

The current state of the active announcement timeline.

#### Defined in

[propresenter.ts:131](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L131)

___

### announcementGetSlideIndex

▸ **announcementGetSlideIndex**(): `JSONValue`

Requests the index of the current slide/cue within the currently active announcement.

#### Returns

`JSONValue`

The index of the current slide/cue within the currently active announcement.

#### Defined in

[propresenter.ts:80](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L80)

___

### announcementNextTrigger

▸ **announcementNextTrigger**(): `JSONValue`

Triggers the next cue in the active announcement presentation (if there is one).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:98](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L98)

___

### announcementPreviousTrigger

▸ **announcementPreviousTrigger**(): `JSONValue`

Triggers the previous cue in the currently active announcement presentation (if there is one).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:104](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L104)

___

### announcementTrigger

▸ **announcementTrigger**(): `JSONValue`

Retriggers the currently active announcement presentation (starts from the beginning).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:92](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L92)

___

### audioGetPlaylists

▸ **audioGetPlaylists**(): `JSONValue`

Requests a list with all the configured audio playlists.

#### Returns

`JSONValue`

a list with all the configured audio playlists.

#### Defined in

[propresenter.ts:142](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L142)

___

### audioGetPlaylistsActive

▸ **audioGetPlaylistsActive**(): `JSONValue`

Requests the currently active audio playlist

#### Returns

`JSONValue`

The currently active audio playlist

#### Defined in

[propresenter.ts:174](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L174)

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

[propresenter.ts:150](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L150)

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

[propresenter.ts:158](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L158)

___

### audioGetPlaylistsFocused

▸ **audioGetPlaylistsFocused**(): `JSONValue`

Requests the currently focused audio playlist

#### Returns

`JSONValue`

The currently focused audio playlist

#### Defined in

[propresenter.ts:167](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L167)

___

### audioPlaylistsActiveFocus

▸ **audioPlaylistsActiveFocus**(): `JSONValue`

Focuses the active audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:192](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L192)

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

[propresenter.ts:270](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L270)

___

### audioPlaylistsActiveNextTrigger

▸ **audioPlaylistsActiveNextTrigger**(): `JSONValue`

Triggers the next item in the active audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:253](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L253)

___

### audioPlaylistsActiveTrigger

▸ **audioPlaylistsActiveTrigger**(): `JSONValue`

Triggers the active audio playlist (restarts from the beginning).

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:213](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L213)

___

### audioPlaylistsActivedPreviousTrigger

▸ **audioPlaylistsActivedPreviousTrigger**(): `JSONValue`

Triggers the previous item in the active audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:261](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L261)

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

[propresenter.ts:199](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L199)

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

[propresenter.ts:279](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L279)

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

[propresenter.ts:288](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L288)

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

[propresenter.ts:220](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L220)

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

[propresenter.ts:245](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L245)

___

### audioPlaylistsFocusedNextTrigger

▸ **audioPlaylistsFocusedNextTrigger**(): `JSONValue`

Triggers the next item in the focused audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:228](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L228)

___

### audioPlaylistsFocusedPreviousTrigger

▸ **audioPlaylistsFocusedPreviousTrigger**(): `JSONValue`

Triggers the previous item in the focused audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:236](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L236)

___

### audioPlaylistsFocusedTrigger

▸ **audioPlaylistsFocusedTrigger**(): `JSONValue`

Triggers the focused audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:207](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L207)

___

### audioPlaylistsNextFocus

▸ **audioPlaylistsNextFocus**(): `JSONValue`

Focuses the next audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:180](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L180)

___

### audioPlaylistsPreviousFocus

▸ **audioPlaylistsPreviousFocus**(): `JSONValue`

Focuses the previous audio playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:186](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L186)

___

### captureEncodingsType

▸ **captureEncodingsType**(`type`): `JSONValue`

Requests a list of all available capture modes for the capture type (disk, rtmp, resi).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"disk"`` \| ``"rtmp"`` \| ``"resi"`` | (disk, rtmp, resi) |

#### Returns

`JSONValue`

A list of all available capture modes for the capture type (disk, rtmp, resi).

#### Defined in

[propresenter.ts:324](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L324)

___

### captureGetStatus

▸ **captureGetStatus**(): `JSONValue`

Requests the current capture status and capture time.

#### Returns

`JSONValue`

The current capture status and capture time.

#### Defined in

[propresenter.ts:302](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L302)

___

### captureGetsettings

▸ **captureGetsettings**(): `JSONValue`

Requests the current capture settings.

#### Returns

`JSONValue`

The current capture settings.

#### Defined in

[propresenter.ts:316](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L316)

___

### captureOperation

▸ **captureOperation**(`operation`): `JSONValue`

Performs the requested capture operation (start, stop).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation` | ``"stop"`` \| ``"start"`` | (start, stop) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:309](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L309)

___

### clearCreateGroup

▸ **clearCreateGroup**(): `JSONValue`

DOUBLE CHECK THIS FOR MISSING PARAMS
Create a clear group with the details specified.

#### Returns

`JSONValue`

The created group.

#### Defined in

[propresenter.ts:410](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L410)

___

### clearDeleteGroupId

▸ **clearDeleteGroupId**(`id`): `JSONValue`

Deletes the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:368](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L368)

___

### clearGetGroup

▸ **clearGetGroup**(): `JSONValue`

Requests a list of all the configured clear groups.

#### Returns

`JSONValue`

A list of all the configured clear groups.

#### Defined in

[propresenter.ts:402](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L402)

___

### clearGetGroupId

▸ **clearGetGroupId**(`id`): `JSONValue`

Requests the details of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`JSONValue`

The details of the specified clear group.

#### Defined in

[propresenter.ts:351](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L351)

___

### clearGetGroupIdIcon

▸ **clearGetGroupIdIcon**(`id`): `JSONValue`

Requests the image data for the icon of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`JSONValue`

The image data for the icon of the specified clear group.

#### Defined in

[propresenter.ts:378](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L378)

___

### clearGroupIdTrigger

▸ **clearGroupIdTrigger**(`id`): `JSONValue`

Triggers the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:395](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L395)

___

### clearLayer

▸ **clearLayer**(`layer`): `JSONValue`

Clears the specified layer (audio, props, messages, announcements, slide, media, video_input).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"media"`` \| ``"audio"`` \| ``"props"`` \| ``"messages"`` \| ``"announcements"`` \| ``"slide"`` \| ``"video_input"`` | (audio, props, messages, announcements, slide, media, video_input) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:334](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L334)

___

### clearSetGroupId

▸ **clearSetGroupId**(`id`): `JSONValue`

Sets the details of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`JSONValue`

The details of the specified clear group.

#### Defined in

[propresenter.ts:359](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L359)

___

### clearSetGroupIdIcon

▸ **clearSetGroupIdIcon**(`id`): `JSONValue`

Sets the custom icon of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:386](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L386)

___

### findMyMouse

▸ **findMyMouse**(): `JSONValue`

Executes the "Find My Mouse" operation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:842](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L842)

___

### getDataFromProPresenter

▸ **getDataFromProPresenter**(`path`, `userOptions?`): `JSONValue`

API wrapper function, use fetch to send/retrieve the data from ProPresenter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` |  |
| `userOptions?` | `any` | (optional) |

#### Returns

`JSONValue`

Promise from fetch

#### Defined in

[propresenter.ts:25](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L25)

___

### groupsGet

▸ **groupsGet**(): `JSONValue`

Requests a list of all the configured global groups.

#### Returns

`JSONValue`

A list of all the configured global groups.

#### Defined in

[propresenter.ts:420](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L420)

___

### libraryByIdPresentationIdCueTrigger

▸ **libraryByIdPresentationIdCueTrigger**(`library_id`, `presentation_id`, `cue`): `JSONValue`

Triggers the specified cue of the specified presentation in the specified library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `library_id` | `string` |
| `presentation_id` | `string` |
| `cue` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:463](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L463)

___

### libraryByIdPresentationIdTrigger

▸ **libraryByIdPresentationIdTrigger**(`library_id`, `presentation_id`): `JSONValue`

Triggers the first cue of the specified presentation in the specified library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `library_id` | `string` |
| `presentation_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:449](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L449)

___

### libraryGet

▸ **libraryGet**(): `JSONValue`

Requests a list of all the configured libraries.

#### Returns

`JSONValue`

A list of all the configured libraries.

#### Defined in

[propresenter.ts:432](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L432)

___

### libraryGetById

▸ **libraryGetById**(`id`): `JSONValue`

Requests an array of all items in the specified library.

**`Params`**

id (UUID, name, or index)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

An array of all items in the specified library.

#### Defined in

[propresenter.ts:440](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L440)

___

### lookCreate

▸ **lookCreate**(): `JSONValue`

Creates a new audience look with the specified details.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:486](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L486)

___

### lookDeleteId

▸ **lookDeleteId**(`id`): `JSONValue`

Deletes the specified audience look from the saved looks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:522](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L522)

___

### lookGet

▸ **lookGet**(): `JSONValue`

Requests a list of all configured audience looks, except the live look.

#### Returns

`JSONValue`

A list of all configured audience looks, except the live look.

#### Defined in

[propresenter.ts:480](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L480)

___

### lookGetCurrent

▸ **lookGetCurrent**(): `JSONValue`

Requests the details of the currently live audience look.

#### Returns

`JSONValue`

The details of the currently live audience look.

#### Defined in

[propresenter.ts:493](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L493)

___

### lookGetId

▸ **lookGetId**(`id`): `JSONValue`

Requests the details of the specified audience look.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

The details of the specified audience look.

#### Defined in

[propresenter.ts:508](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L508)

___

### lookIdTrigger

▸ **lookIdTrigger**(`id`): `JSONValue`

Triggers the specified audience look to make it the live/current look.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:529](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L529)

___

### lookSetCurrent

▸ **lookSetCurrent**(): `JSONValue`

Requests the details of the currently live audience look.

#### Returns

`JSONValue`

The details of the currently live audience look.

#### Defined in

[propresenter.ts:500](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L500)

___

### lookSetId

▸ **lookSetId**(`id`): `JSONValue`

Sets the details of the specified audience look.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:515](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L515)

___

### marcosGet

▸ **marcosGet**(): `JSONValue`

Requests a list of all the configured macros.

#### Returns

`JSONValue`

A list of all the configured macros.

#### Defined in

[propresenter.ts:540](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L540)

___

### marcosIdDelete

▸ **marcosIdDelete**(`id`): `JSONValue`

Deletes the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:562](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L562)

___

### marcosIdGet

▸ **marcosIdGet**(`id`): `JSONValue`

Requests the details of the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

The details of the specified macro.

#### Defined in

[propresenter.ts:548](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L548)

___

### marcosIdSet

▸ **marcosIdSet**(`id`): `JSONValue`

Sets the details of the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:555](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L555)

___

### marcosIdTriggerGet

▸ **marcosIdTriggerGet**(`id`): `JSONValue`

Triggers the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:571](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L571)

___

### masksGet

▸ **masksGet**(): `JSONValue`

Requests a list of all configured masks.

#### Returns

`JSONValue`

A list of all configured masks.

#### Defined in

[propresenter.ts:581](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L581)

___

### masksIdGet

▸ **masksIdGet**(`id`): `JSONValue`

Requests the details of the specified mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

The details of the specified mask.

#### Defined in

[propresenter.ts:589](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L589)

___

### masksIdThumbnailGet

▸ **masksIdThumbnailGet**(`id`): `JSONValue`

Requests a thumbnail image of the specified mask at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

A thumbnail image of the specified mask at the given quality value.

#### Defined in

[propresenter.ts:597](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L597)

___

### mediaByUUIDThumbnailsGet

▸ **mediaByUUIDThumbnailsGet**(`uuid`): `JSONValue`

Requests a thumbnail image of the specified media item at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`JSONValue`

A thumbnail image of the specified media item at the given quality value.

#### Defined in

[propresenter.ts:633](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L633)

___

### mediaPlaylistActiveFocus

▸ **mediaPlaylistActiveFocus**(): `JSONValue`

Sets the focus to the active media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:665](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L665)

___

### mediaPlaylistActiveGet

▸ **mediaPlaylistActiveGet**(): `JSONValue`

Returns the identifier of the currently active media playlist.

#### Returns

`JSONValue`

The identifier of the currently active media playlist

#### Defined in

[propresenter.ts:647](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L647)

___

### mediaPlaylistActiveMediaIdTrigger

▸ **mediaPlaylistActiveMediaIdTrigger**(`media_id`): `JSONValue`

Triggers the specified item in the active media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:743](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L743)

___

### mediaPlaylistActiveNextTrigger

▸ **mediaPlaylistActiveNextTrigger**(): `JSONValue`

Triggers the next item in the active media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:726](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L726)

___

### mediaPlaylistActivePreviousTrigger

▸ **mediaPlaylistActivePreviousTrigger**(): `JSONValue`

Triggers the previous item in the active media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:734](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L734)

___

### mediaPlaylistActiveTrigger

▸ **mediaPlaylistActiveTrigger**(): `JSONValue`

Triggers the first item in the active media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:686](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L686)

___

### mediaPlaylistByPlaylistIdGet

▸ **mediaPlaylistByPlaylistIdGet**(`playlist_id`): `JSONValue`

Requests a list of all the media items in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

A list of all the media items in the specified media playlist.

#### Defined in

[propresenter.ts:615](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L615)

___

### mediaPlaylistByPlaylistIdUpdatesGet

▸ **mediaPlaylistByPlaylistIdUpdatesGet**(`playlist_id`): `JSONValue`

Requests a chunked data update every time the specified media playlist changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

A chunked data update every time the specified media playlist changes.

#### Defined in

[propresenter.ts:623](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L623)

___

### mediaPlaylistFocusedGet

▸ **mediaPlaylistFocusedGet**(): `JSONValue`

Returns the identifier of the currently focused media playlist

#### Returns

`JSONValue`

The identifier of the currently focused media playlist

#### Defined in

[propresenter.ts:640](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L640)

___

### mediaPlaylistFocusedMediaIdTrigger

▸ **mediaPlaylistFocusedMediaIdTrigger**(`media_id`): `JSONValue`

Triggers the specified item in the focused media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:718](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L718)

___

### mediaPlaylistFocusedNextTrigger

▸ **mediaPlaylistFocusedNextTrigger**(): `JSONValue`

Triggers the next item in the focused media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:701](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L701)

___

### mediaPlaylistFocusedPreviousTrigger

▸ **mediaPlaylistFocusedPreviousTrigger**(): `JSONValue`

Triggers the previous item in the focused media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:709](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L709)

___

### mediaPlaylistFocusedTrigger

▸ **mediaPlaylistFocusedTrigger**(): `JSONValue`

Triggers the first item in the focused media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:680](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L680)

___

### mediaPlaylistNextFocus

▸ **mediaPlaylistNextFocus**(): `JSONValue`

Sets the focus to the next media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:653](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L653)

___

### mediaPlaylistPlaylistIdFocus

▸ **mediaPlaylistPlaylistIdFocus**(`playlist_id`): `JSONValue`

Sets the focus to the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:672](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L672)

___

### mediaPlaylistPlaylistIdMediaIdTrigger

▸ **mediaPlaylistPlaylistIdMediaIdTrigger**(`playlist_id`, `media_id`): `JSONValue`

Triggers the previous item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |
| `media_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:771](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L771)

___

### mediaPlaylistPlaylistIdNextTrigger

▸ **mediaPlaylistPlaylistIdNextTrigger**(`playlist_id`): `JSONValue`

Triggers the next item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:752](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L752)

___

### mediaPlaylistPlaylistIdPreviousTrigger

▸ **mediaPlaylistPlaylistIdPreviousTrigger**(`playlist_id`): `JSONValue`

Triggers the previous item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:761](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L761)

___

### mediaPlaylistPlaylistIdTrigger

▸ **mediaPlaylistPlaylistIdTrigger**(`playlist_id`): `JSONValue`

Triggers the first item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:693](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L693)

___

### mediaPlaylistPreviousFocus

▸ **mediaPlaylistPreviousFocus**(): `JSONValue`

Sets the focus to the previous media playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:659](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L659)

___

### mediaPlaylistsGet

▸ **mediaPlaylistsGet**(): `JSONValue`

Requests a list of all the configured media playlists.

#### Returns

`JSONValue`

A list of all the configured media playlists.

#### Defined in

[propresenter.ts:607](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L607)

___

### messagesCreate

▸ **messagesCreate**(): `JSONValue`

Creates a new message with specified details.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:792](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L792)

___

### messagesGet

▸ **messagesGet**(): `JSONValue`

Requests a list of all configured messages.

#### Returns

`JSONValue`

A list of all configured messages.

#### Defined in

[propresenter.ts:785](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L785)

___

### messagesIdClear

▸ **messagesIdClear**(`id`): `JSONValue`

Clears / Hides the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:832](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L832)

___

### messagesIdDelete

▸ **messagesIdDelete**(`id`): `JSONValue`

Deletes the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:814](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L814)

___

### messagesIdGet

▸ **messagesIdGet**(`id`): `JSONValue`

Requests the details of the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

The details of the specified message.

#### Defined in

[propresenter.ts:800](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L800)

___

### messagesIdSet

▸ **messagesIdSet**(`id`): `JSONValue`

Sets the details of the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:807](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L807)

___

### messagesIdTrigger

▸ **messagesIdTrigger**(`id`): `JSONValue`

Triggers / Shows the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:823](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L823)

___

### playlistActiveAnnouncementFocus

▸ **playlistActiveAnnouncementFocus**(): `JSONValue`

Moves the focus to the currently active playlist for the announcement destination.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:923](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L923)

___

### playlistActiveAnnouncementIndexTrigger

▸ **playlistActiveAnnouncementIndexTrigger**(`index`): `JSONValue`

Triggers the specified item in the currently active playlist for the announcement destination.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1036](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1036)

___

### playlistActiveAnnouncementTrigger

▸ **playlistActiveAnnouncementTrigger**(): `JSONValue`

Triggers the first item in the currently active playlist for the announcement destination.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:945](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L945)

___

### playlistActiveGet

▸ **playlistActiveGet**(): `JSONValue`

Requests the details of the active playlist.

#### Returns

`JSONValue`

The details of the active playlist.

#### Defined in

[propresenter.ts:890](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L890)

___

### playlistActivePresentationFocus

▸ **playlistActivePresentationFocus**(): `JSONValue`

Moves the focus to the currently active playlist for the presentation destination.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:915](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L915)

___

### playlistActivePresentationIndexTrigger

▸ **playlistActivePresentationIndexTrigger**(`index`): `JSONValue`

Triggers the specified item in the currently active playlist for the presentation destination.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1027](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1027)

___

### playlistActivePresentationTrigger

▸ **playlistActivePresentationTrigger**(): `JSONValue`

Triggers the first item in the currently active playlist for the presentation destination.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:937](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L937)

___

### playlistFocusedGet

▸ **playlistFocusedGet**(): `JSONValue`

Requests the details of the currently focused playlist.

#### Returns

`JSONValue`

The details of the currently focused playlist.

#### Defined in

[propresenter.ts:897](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L897)

___

### playlistFocusedIndexTrigger

▸ **playlistFocusedIndexTrigger**(`index`): `JSONValue`

Triggers the specified item in the focused playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1018](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1018)

___

### playlistFocusedNextTrigger

▸ **playlistFocusedNextTrigger**(): `JSONValue`

Triggers the next item in the currently focused playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:953](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L953)

___

### playlistFocusedPreviousTrigger

▸ **playlistFocusedPreviousTrigger**(): `JSONValue`

Triggers the previous item in the currently focused playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:959](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L959)

___

### playlistFocusedTrigger

▸ **playlistFocusedTrigger**(): `JSONValue`

Triggers the first item in the currently focused playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:931](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L931)

___

### playlistIdentifierFocus

▸ **playlistIdentifierFocus**(`identifier`): `JSONValue`

Moves the focus to the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:976](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L976)

___

### playlistIdentifierIndexTrigger

▸ **playlistIdentifierIndexTrigger**(`identifier`, `index`): `JSONValue`

Triggers the specified item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1009](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1009)

___

### playlistIdentifierNextTrigger

▸ **playlistIdentifierNextTrigger**(`identifier`): `JSONValue`

Triggers the next item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:990](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L990)

___

### playlistIdentifierPreviousTrigger

▸ **playlistIdentifierPreviousTrigger**(`identifier`): `JSONValue`

Triggers the previous item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:999](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L999)

___

### playlistIdentifierTrigger

▸ **playlistIdentifierTrigger**(`identifier`): `JSONValue`

Triggers the first item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:983](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L983)

___

### playlistIdentifierUpdates

▸ **playlistIdentifierUpdates**(`identifier`): `JSONValue`

Requests a chunked data update every time the specified audio playlist changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`JSONValue`

A chunked data update every time the specified audio playlist changes.

#### Defined in

[propresenter.ts:969](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L969)

___

### playlistNextFocus

▸ **playlistNextFocus**(): `JSONValue`

Moves the focus to the next playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:903](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L903)

___

### playlistPlaylistIdCreate

▸ **playlistPlaylistIdCreate**(`playlist_id`): `JSONValue`

Creates a playlist with the specified details underneath the specified playlist or playlist folder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:881](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L881)

___

### playlistPlaylistIdGet

▸ **playlistPlaylistIdGet**(`playlist_id`): `JSONValue`

Requests a list of the items in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

Alist of the items in the specified playlist.

#### Defined in

[propresenter.ts:867](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L867)

___

### playlistPlaylistIdSet

▸ **playlistPlaylistIdSet**(`playlist_id`): `JSONValue`

Sets the contents of the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:873](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L873)

___

### playlistPreviousFocus

▸ **playlistPreviousFocus**(): `JSONValue`

Moves the focus to the previous playlist.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:909](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L909)

___

### playlistsCreate

▸ **playlistsCreate**(): `JSONValue`

Creates a playlist with the specified details.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:860](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L860)

___

### playlistsGet

▸ **playlistsGet**(): `JSONValue`

Requests a list of all configured playlists.

#### Returns

`JSONValue`

A list of all configured playlists.

#### Defined in

[propresenter.ts:854](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L854)

___

### presentationActiveFocus

▸ **presentationActiveFocus**(): `JSONValue`

Sets the focus to the active presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1160](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1160)

___

### presentationActiveGet

▸ **presentationActiveGet**(): `JSONValue`

Requests the details of the currently active presentation.

#### Returns

`JSONValue`

The details of the currently active presentation.

#### Defined in

[propresenter.ts:1049](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1049)

___

### presentationActiveIndexTrigger

▸ **presentationActiveIndexTrigger**(`index`): `JSONValue`

Triggers the specified cue of the active presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1225](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1225)

___

### presentationActiveNextTrigger

▸ **presentationActiveNextTrigger**(): `JSONValue`

Triggers the next cue of the active presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1210](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1210)

___

### presentationActivePreviousTrigger

▸ **presentationActivePreviousTrigger**(): `JSONValue`

Triggers the previous cue of the active presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1216](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1216)

___

### presentationActiveTimeline

▸ **presentationActiveTimeline**(): `JSONValue`

Requests the current state of the active presentation timeline.

#### Returns

`JSONValue`

The current state of the active presentation timeline.

#### Defined in

[propresenter.ts:1092](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1092)

___

### presentationActiveTimelineOperation

▸ **presentationActiveTimelineOperation**(`operation`): `JSONValue`

Performs the requested timeline operation for the currently active presentation (play, pause, rewind).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation` | ``"pause"`` \| ``"play"`` \| ``"rewind"`` | (play, pause, rewind) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1106](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1106)

___

### presentationActiveTrigger

▸ **presentationActiveTrigger**(): `JSONValue`

Retriggers the active presentation from the start.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1204](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1204)

___

### presentationChordChartGet

▸ **presentationChordChartGet**(): `JSONValue`

Requests the current chord chart image (if available) at the given quality value.

#### Returns

`JSONValue`

The current chord chart image (if available) at the given quality value.

#### Defined in

[propresenter.ts:1070](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1070)

___

### presentationChordChartUpdates

▸ **presentationChordChartUpdates**(): `JSONValue`

Requests a chunked data update every time the chord chart changes.

#### Returns

`JSONValue`

A chunked data update every time the chord chart changes.

#### Defined in

[propresenter.ts:1077](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1077)

___

### presentationFocusedGet

▸ **presentationFocusedGet**(): `JSONValue`

Gets the currently focused presentation.

#### Returns

`JSONValue`

The currently focused presentation.

#### Defined in

[propresenter.ts:1056](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1056)

___

### presentationFocusedIndexTrigger

▸ **presentationFocusedIndexTrigger**(`index`): `JSONValue`

Triggers the specified cue of the focused presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1196](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1196)

___

### presentationFocusedNextTrigger

▸ **presentationFocusedNextTrigger**(): `JSONValue`

Triggers the next cue of the focused presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1179](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1179)

___

### presentationFocusedPreviousTrigger

▸ **presentationFocusedPreviousTrigger**(): `JSONValue`

Triggers the previous cue of the focused presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1187](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1187)

___

### presentationFocusedTimeline

▸ **presentationFocusedTimeline**(): `JSONValue`

Requests the current state of the focused presentation timeline.

#### Returns

`JSONValue`

The current state of the focused presentation timeline.

#### Defined in

[propresenter.ts:1099](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1099)

___

### presentationFocusedTimelineOperation

▸ **presentationFocusedTimelineOperation**(`operation`): `JSONValue`

Performs the requested timeline operation for the currently focused presentation (play, pause, rewind).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation` | ``"pause"`` \| ``"play"`` \| ``"rewind"`` | (play, pause, rewind) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1115](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1115)

___

### presentationFocusedTrigger

▸ **presentationFocusedTrigger**(): `JSONValue`

Triggers the focused presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1173](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1173)

___

### presentationNextFocus

▸ **presentationNextFocus**(): `JSONValue`

Sets the focus to the next presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1148](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1148)

___

### presentationPreviousFocus

▸ **presentationPreviousFocus**(): `JSONValue`

Sets the focus to the previous presentation.

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1154](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1154)

___

### presentationSlideIndexGet

▸ **presentationSlideIndexGet**(): `JSONValue`

Requests the index of the current slide/cue within the currently active presentation.

#### Returns

`JSONValue`

The index of the current slide/cue within the currently active presentation.

#### Defined in

[propresenter.ts:1063](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1063)

___

### presentationUUIDFocus

▸ **presentationUUIDFocus**(`uuid`): `JSONValue`

Sets the focus to the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1167](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1167)

___

### presentationUUIDFocusedTimelineOperation

▸ **presentationUUIDFocusedTimelineOperation**(`uuid`, `operation`): `JSONValue`

Performs the requested timeline operation for the specified presentation (play, pause, rewind).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` |  |
| `operation` | ``"pause"`` \| ``"play"`` \| ``"rewind"`` | (play, pause, rewind) |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1125](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1125)

___

### presentationUUIDGet

▸ **presentationUUIDGet**(`uuid`): `JSONValue`

Requests the details of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`JSONValue`

The details of the specified presentation.

#### Defined in

[propresenter.ts:1085](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1085)

___

### presentationUUIDIndexTrigger

▸ **presentationUUIDIndexTrigger**(`uuid`, `index`): `JSONValue`

Triggers the specified cue of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1257](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1257)

___

### presentationUUIDNextTrigger

▸ **presentationUUIDNextTrigger**(`uuid`): `JSONValue`

Triggers the next cue of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1240](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1240)

___

### presentationUUIDPreviousTrigger

▸ **presentationUUIDPreviousTrigger**(`uuid`): `JSONValue`

Triggers the previous cue of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1248](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1248)

___

### presentationUUIDThumbnailIndex

▸ **presentationUUIDThumbnailIndex**(`uuid`, `index`): `JSONValue`

Requests a thumbnail image of the specified cue inside the specified presentation at the given quality value.

**`Retuns`**

A thumbnail image of the specified cue inside the specified presentation at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `index` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1139](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1139)

___

### presentationUUIDTrigger

▸ **presentationUUIDTrigger**(`uuid`): `JSONValue`

Triggers the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`JSONValue`

#### Defined in

[propresenter.ts:1234](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L1234)

___

### version

▸ **version**(): `JSONValue`

Requests the general information about the currently active ProPresenter instance

#### Returns

`JSONValue`

General information about the currently active ProPresenter instance

#### Defined in

[propresenter.ts:61](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/b9ba11d/src/propresenter.ts#L61)