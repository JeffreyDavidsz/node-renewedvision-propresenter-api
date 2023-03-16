# POST/PUT COMMANDS AREN't YET FINISHED AT THIS POINT
## RenewedVision ProPresenter API wrapper

Typescript wrapper for Node.js.

## Installation

```sh
yarn add renewedvision-propresenter
```

## Usage

```js
import { ProPresenter } from 'renewedvision-propresenter'

// Change IP and Port to the values from ProPresenter; settings... > Network (enable network)
this.ProPresenter = new ProPresenter('10.0.0.1', 1025)

// Example request
this.ProPresenter.version().then((result) => {
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

>> 'command' result will return the requested action/command. This way you can see where the data is returning from.

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
- [audioPlaylistsActivePreviousTrigger](README.md#audioplaylistsactiveprevioustrigger)
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
- [messagesGet](README.md#messagesget)
- [messagesIdClear](README.md#messagesidclear)
- [messagesIdDelete](README.md#messagesiddelete)
- [messagesIdGet](README.md#messagesidget)
- [messagesIdSet](README.md#messagesidset)
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
- [playlistPlaylistIdGet](README.md#playlistplaylistidget)
- [playlistPlaylistIdSet](README.md#playlistplaylistidset)
- [playlistPreviousFocus](README.md#playlistpreviousfocus)
- [playlistsGet](README.md#playlistsget)
- [presentationActiveFocus](README.md#presentationactivefocus)
- [presentationActiveGet](README.md#presentationactiveget)
- [presentationActiveGroupGroup\_IdTrigger](README.md#presentationactivegroupgroup_idtrigger)
- [presentationActiveIndexTrigger](README.md#presentationactiveindextrigger)
- [presentationActiveNextTrigger](README.md#presentationactivenexttrigger)
- [presentationActivePreviousTrigger](README.md#presentationactiveprevioustrigger)
- [presentationActiveTimeline](README.md#presentationactivetimeline)
- [presentationActiveTimelineOperation](README.md#presentationactivetimelineoperation)
- [presentationActiveTrigger](README.md#presentationactivetrigger)
- [presentationChordChartGet](README.md#presentationchordchartget)
- [presentationChordChartUpdates](README.md#presentationchordchartupdates)
- [presentationFocusedGet](README.md#presentationfocusedget)
- [presentationFocusedGroupGroup\_IdTrigger](README.md#presentationfocusedgroupgroup_idtrigger)
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
- [presentationUUIDGroupGroup\_IdTrigger](README.md#presentationuuidgroupgroup_idtrigger)
- [presentationUUIDIndexTrigger](README.md#presentationuuidindextrigger)
- [presentationUUIDNextTrigger](README.md#presentationuuidnexttrigger)
- [presentationUUIDPreviousTrigger](README.md#presentationuuidprevioustrigger)
- [presentationUUIDThumbnailIndex](README.md#presentationuuidthumbnailindex)
- [presentationUUIDTrigger](README.md#presentationuuidtrigger)
- [propGet](README.md#propget)
- [propId](README.md#propid)
- [propIdClear](README.md#propidclear)
- [propIdDelete](README.md#propiddelete)
- [propIdThumbnail](README.md#propidthumbnail)
- [propIdTrigger](README.md#propidtrigger)
- [stageLayoutIdDelete](README.md#stagelayoutiddelete)
- [stageLayoutIdThumbnail](README.md#stagelayoutidthumbnail)
- [stageLayoutMap](README.md#stagelayoutmap)
- [stageLayoutMapSet](README.md#stagelayoutmapset)
- [stageLayoutsGet](README.md#stagelayoutsget)
- [stageMessage](README.md#stagemessage)
- [stageMessageGet](README.md#stagemessageget)
- [stageMessageHide](README.md#stagemessagehide)
- [stageScreenIdLayout](README.md#stagescreenidlayout)
- [stageScreenIdLayoutId](README.md#stagescreenidlayoutid)
- [stageScreensGet](README.md#stagescreensget)
- [statusAudienceScreens](README.md#statusaudiencescreens)
- [statusAudienceScreensSet](README.md#statusaudiencescreensset)
- [statusLayers](README.md#statuslayers)
- [statusScreens](README.md#statusscreens)
- [statusSlide](README.md#statusslide)
- [statusStageScreens](README.md#statusstagescreens)
- [statusStageScreensSet](README.md#statusstagescreensset)
- [statusUpdate](README.md#statusupdate)
- [themesGet](README.md#themesget)
- [themesIdGet](README.md#themesidget)
- [themesIdSlidesThemeSlide](README.md#themesidslidesthemeslide)
- [themesIdSlidesThemeSlideSet](README.md#themesidslidesthemeslideset)
- [themesIdSlidesThemeSlideThumbnail](README.md#themesidslidesthemeslidethumbnail)
- [timerCreate](README.md#timercreate)
- [timerIdDelete](README.md#timeriddelete)
- [timerIdGet](README.md#timeridget)
- [timerIdOperation](README.md#timeridoperation)
- [timerIdSet](README.md#timeridset)
- [timerSystemTime](README.md#timersystemtime)
- [timerVideoCountdown](README.md#timervideocountdown)
- [timersCurrent](README.md#timerscurrent)
- [timersGet](README.md#timersget)
- [timersOperation](README.md#timersoperation)
- [transportLayerAutoAdvance](README.md#transportlayerautoadvance)
- [transportLayerAutoAdvanceDelete](README.md#transportlayerautoadvancedelete)
- [transportLayerCurrent](README.md#transportlayercurrent)
- [transportLayerGoToEnd](README.md#transportlayergotoend)
- [transportLayerPause](README.md#transportlayerpause)
- [transportLayerPlay](README.md#transportlayerplay)
- [transportLayerSkipBackwardTime](README.md#transportlayerskipbackwardtime)
- [transportLayerSkipForwardTime](README.md#transportlayerskipforwardtime)
- [transportLayerTime](README.md#transportlayertime)
- [transportLayerTimeSet](README.md#transportlayertimeset)
- [triggerAudioNext](README.md#triggeraudionext)
- [triggerAudioPrevious](README.md#triggeraudioprevious)
- [triggerMediaNext](README.md#triggermedianext)
- [triggerMediaPrevious](README.md#triggermediaprevious)
- [triggerNext](README.md#triggernext)
- [triggerPrevious](README.md#triggerprevious)
- [version](README.md#version)
- [videoInputs](README.md#videoinputs)
- [videoInputsIdTrigger](README.md#videoinputsidtrigger)

## Constructors

### constructor

• **new ProPresenter**(`ip`, `port`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip` | `string` |
| `port` | `number` |

#### Defined in

[propresenter.ts:13](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L13)

## Properties

### ip

• **ip**: `string`

#### Defined in

[propresenter.ts:10](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L10)

___

### port

• **port**: `number`

#### Defined in

[propresenter.ts:11](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L11)

## Methods

### announcementActiveFocus

▸ **announcementActiveFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Focuses the currently active announcement presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:78](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L78)

___

### announcementActiveIndexTrigger

▸ **announcementActiveIndexTrigger**(`index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified cue in the currently active announcement presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` \| `number` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:105](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L105)

___

### announcementActiveTimelineOperation

▸ **announcementActiveTimelineOperation**(`operation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Performs the requested timeline operation for the active announcment presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:114](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L114)

___

### announcementGetActive

▸ **announcementGetActive**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the currently active announcement presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

the currently active announcement presentation.

#### Defined in

[propresenter.ts:65](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L65)

___

### announcementGetActiveTimelineOperation

▸ **announcementGetActiveTimelineOperation**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current state of the active announcement timeline.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current state of the active announcement timeline.

#### Defined in

[propresenter.ts:123](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L123)

___

### announcementGetSlideIndex

▸ **announcementGetSlideIndex**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the index of the current slide/cue within the currently active announcement.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The index of the current slide/cue within the currently active announcement.

#### Defined in

[propresenter.ts:72](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L72)

___

### announcementNextTrigger

▸ **announcementNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next cue in the active announcement presentation (if there is one).

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:90](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L90)

___

### announcementPreviousTrigger

▸ **announcementPreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous cue in the currently active announcement presentation (if there is one).

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:96](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L96)

___

### announcementTrigger

▸ **announcementTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Retriggers the currently active announcement presentation (starts from the beginning).

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:84](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L84)

___

### audioGetPlaylists

▸ **audioGetPlaylists**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list with all the configured audio playlists.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

a list with all the configured audio playlists.

#### Defined in

[propresenter.ts:134](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L134)

___

### audioGetPlaylistsActive

▸ **audioGetPlaylistsActive**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the currently active audio playlist

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The currently active audio playlist

#### Defined in

[propresenter.ts:166](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L166)

___

### audioGetPlaylistsByPlaylistId

▸ **audioGetPlaylistsByPlaylistId**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all the audio items in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

a list of all the audio items in the specified audio playlist.

#### Defined in

[propresenter.ts:142](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L142)

___

### audioGetPlaylistsByPlaylistIdUpdates

▸ **audioGetPlaylistsByPlaylistIdUpdates**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a chunked data update every time the specified audio playlist changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

a chunked data update every time the specified audio playlist changes.

#### Defined in

[propresenter.ts:150](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L150)

___

### audioGetPlaylistsFocused

▸ **audioGetPlaylistsFocused**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the currently focused audio playlist

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The currently focused audio playlist

#### Defined in

[propresenter.ts:159](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L159)

___

### audioPlaylistsActiveFocus

▸ **audioPlaylistsActiveFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Focuses the active audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:184](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L184)

___

### audioPlaylistsActiveIdTrigger

▸ **audioPlaylistsActiveIdTrigger**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the active audio playlist.

**`Params`**

id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:262](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L262)

___

### audioPlaylistsActiveNextTrigger

▸ **audioPlaylistsActiveNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the active audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:245](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L245)

___

### audioPlaylistsActiveTrigger

▸ **audioPlaylistsActiveTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the active audio playlist (restarts from the beginning).

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:205](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L205)

___

### audioPlaylistsActivePreviousTrigger

▸ **audioPlaylistsActivePreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the active audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:253](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L253)

___

### audioPlaylistsByPlaylistIdFocus

▸ **audioPlaylistsByPlaylistIdFocus**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Focuses the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:191](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L191)

___

### audioPlaylistsByPlaylistIdNextTrigger

▸ **audioPlaylistsByPlaylistIdNextTrigger**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:271](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L271)

___

### audioPlaylistsByPlaylistIdPreviousTrigger

▸ **audioPlaylistsByPlaylistIdPreviousTrigger**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:280](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L280)

___

### audioPlaylistsByPlaylistIdTrigger

▸ **audioPlaylistsByPlaylistIdTrigger**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified audio playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:212](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L212)

___

### audioPlaylistsFocusedIdTrigger

▸ **audioPlaylistsFocusedIdTrigger**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the focused audio playlist.

**`Params`**

id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `any` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:237](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L237)

___

### audioPlaylistsFocusedNextTrigger

▸ **audioPlaylistsFocusedNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the focused audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:220](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L220)

___

### audioPlaylistsFocusedPreviousTrigger

▸ **audioPlaylistsFocusedPreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the focused audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:228](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L228)

___

### audioPlaylistsFocusedTrigger

▸ **audioPlaylistsFocusedTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the focused audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:199](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L199)

___

### audioPlaylistsNextFocus

▸ **audioPlaylistsNextFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Focuses the next audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:172](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L172)

___

### audioPlaylistsPreviousFocus

▸ **audioPlaylistsPreviousFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Focuses the previous audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:178](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L178)

___

### captureEncodingsType

▸ **captureEncodingsType**(`type`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all available capture modes for the capture type (disk, rtmp, resi).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"disk"`` \| ``"rtmp"`` \| ``"resi"`` | (disk, rtmp, resi) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all available capture modes for the capture type (disk, rtmp, resi).

#### Defined in

[propresenter.ts:316](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L316)

___

### captureGetStatus

▸ **captureGetStatus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current capture status and capture time.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current capture status and capture time.

#### Defined in

[propresenter.ts:294](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L294)

___

### captureGetsettings

▸ **captureGetsettings**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current capture settings.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current capture settings.

#### Defined in

[propresenter.ts:308](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L308)

___

### captureOperation

▸ **captureOperation**(`operation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Performs the requested capture operation (start, stop).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation` | ``"stop"`` \| ``"start"`` | (start, stop) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:301](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L301)

___

### clearCreateGroup

▸ **clearCreateGroup**(`name`, `layers`, `stop_timeline_announcements`, `stop_timeline_presentation`, `clear_next_presentation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

DOUBLE CHECK THIS FOR MISSING PARAMS
Create a clear group with the details specified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `layers` | `string`[] |
| `stop_timeline_announcements` | `boolean` |
| `stop_timeline_presentation` | `boolean` |
| `clear_next_presentation` | `boolean` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The created group.

#### Defined in

[propresenter.ts:407](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L407)

___

### clearDeleteGroupId

▸ **clearDeleteGroupId**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Deletes the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:360](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L360)

___

### clearGetGroup

▸ **clearGetGroup**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all the configured clear groups.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all the configured clear groups.

#### Defined in

[propresenter.ts:394](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L394)

___

### clearGetGroupId

▸ **clearGetGroupId**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified clear group.

#### Defined in

[propresenter.ts:343](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L343)

___

### clearGetGroupIdIcon

▸ **clearGetGroupIdIcon**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the image data for the icon of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The image data for the icon of the specified clear group.

#### Defined in

[propresenter.ts:370](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L370)

___

### clearGroupIdTrigger

▸ **clearGroupIdTrigger**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:387](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L387)

___

### clearLayer

▸ **clearLayer**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Clears the specified layer (audio, props, messages, announcements, slide, media, video_input).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"media"`` \| ``"audio"`` \| ``"props"`` \| ``"messages"`` \| ``"announcements"`` \| ``"slide"`` \| ``"video_input"`` | (audio, props, messages, announcements, slide, media, video_input) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:326](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L326)

___

### clearSetGroupId

▸ **clearSetGroupId**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the details of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified clear group.

#### Defined in

[propresenter.ts:351](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L351)

___

### clearSetGroupIdIcon

▸ **clearSetGroupIdIcon**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the custom icon of the specified clear group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | (name, index or UUID) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:378](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L378)

___

### findMyMouse

▸ **findMyMouse**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Executes the "Find My Mouse" operation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:865](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L865)

___

### getDataFromProPresenter

▸ `Private` **getDataFromProPresenter**(`path`, `userOptions?`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

API wrapper function, use fetch to send/retrieve the data from ProPresenter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` |  |
| `userOptions?` | `any` | (optional) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Promise from fetch

#### Defined in

[propresenter.ts:25](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L25)

___

### groupsGet

▸ **groupsGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all the configured global groups.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all the configured global groups.

#### Defined in

[propresenter.ts:443](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L443)

___

### libraryByIdPresentationIdCueTrigger

▸ **libraryByIdPresentationIdCueTrigger**(`library_id`, `presentation_id`, `cue`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified cue of the specified presentation in the specified library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `library_id` | `string` |
| `presentation_id` | `string` |
| `cue` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:486](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L486)

___

### libraryByIdPresentationIdTrigger

▸ **libraryByIdPresentationIdTrigger**(`library_id`, `presentation_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first cue of the specified presentation in the specified library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `library_id` | `string` |
| `presentation_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:472](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L472)

___

### libraryGet

▸ **libraryGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all the configured libraries.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all the configured libraries.

#### Defined in

[propresenter.ts:455](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L455)

___

### libraryGetById

▸ **libraryGetById**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests an array of all items in the specified library.

**`Params`**

id (UUID, name, or index)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

An array of all items in the specified library.

#### Defined in

[propresenter.ts:463](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L463)

___

### lookDeleteId

▸ **lookDeleteId**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Deletes the specified audience look from the saved looks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:545](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L545)

___

### lookGet

▸ **lookGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all configured audience looks, except the live look.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all configured audience looks, except the live look.

#### Defined in

[propresenter.ts:503](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L503)

___

### lookGetCurrent

▸ **lookGetCurrent**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the currently live audience look.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the currently live audience look.

#### Defined in

[propresenter.ts:516](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L516)

___

### lookGetId

▸ **lookGetId**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified audience look.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified audience look.

#### Defined in

[propresenter.ts:531](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L531)

___

### lookIdTrigger

▸ **lookIdTrigger**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified audience look to make it the live/current look.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:552](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L552)

___

### lookSetCurrent

▸ **lookSetCurrent**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the currently live audience look.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the currently live audience look.

#### Defined in

[propresenter.ts:523](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L523)

___

### lookSetId

▸ **lookSetId**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the details of the specified audience look.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:538](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L538)

___

### marcosGet

▸ **marcosGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all the configured macros.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all the configured macros.

#### Defined in

[propresenter.ts:563](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L563)

___

### marcosIdDelete

▸ **marcosIdDelete**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Deletes the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:585](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L585)

___

### marcosIdGet

▸ **marcosIdGet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified macro.

#### Defined in

[propresenter.ts:571](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L571)

___

### marcosIdSet

▸ **marcosIdSet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the details of the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:578](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L578)

___

### marcosIdTriggerGet

▸ **marcosIdTriggerGet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified macro.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:594](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L594)

___

### masksGet

▸ **masksGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all configured masks.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all configured masks.

#### Defined in

[propresenter.ts:604](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L604)

___

### masksIdGet

▸ **masksIdGet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified mask.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified mask.

#### Defined in

[propresenter.ts:612](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L612)

___

### masksIdThumbnailGet

▸ **masksIdThumbnailGet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a thumbnail image of the specified mask at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A thumbnail image of the specified mask at the given quality value.

#### Defined in

[propresenter.ts:620](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L620)

___

### mediaByUUIDThumbnailsGet

▸ **mediaByUUIDThumbnailsGet**(`uuid`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a thumbnail image of the specified media item at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A thumbnail image of the specified media item at the given quality value.

#### Defined in

[propresenter.ts:656](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L656)

___

### mediaPlaylistActiveFocus

▸ **mediaPlaylistActiveFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:688](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L688)

___

### mediaPlaylistActiveGet

▸ **mediaPlaylistActiveGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Returns the identifier of the currently active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The identifier of the currently active media playlist

#### Defined in

[propresenter.ts:670](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L670)

___

### mediaPlaylistActiveMediaIdTrigger

▸ **mediaPlaylistActiveMediaIdTrigger**(`media_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the active media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:766](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L766)

___

### mediaPlaylistActiveNextTrigger

▸ **mediaPlaylistActiveNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:749](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L749)

___

### mediaPlaylistActivePreviousTrigger

▸ **mediaPlaylistActivePreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:757](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L757)

___

### mediaPlaylistActiveTrigger

▸ **mediaPlaylistActiveTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first item in the active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:709](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L709)

___

### mediaPlaylistByPlaylistIdGet

▸ **mediaPlaylistByPlaylistIdGet**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all the media items in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all the media items in the specified media playlist.

#### Defined in

[propresenter.ts:638](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L638)

___

### mediaPlaylistByPlaylistIdUpdatesGet

▸ **mediaPlaylistByPlaylistIdUpdatesGet**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a chunked data update every time the specified media playlist changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A chunked data update every time the specified media playlist changes.

#### Defined in

[propresenter.ts:646](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L646)

___

### mediaPlaylistFocusedGet

▸ **mediaPlaylistFocusedGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Returns the identifier of the currently focused media playlist

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The identifier of the currently focused media playlist

#### Defined in

[propresenter.ts:663](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L663)

___

### mediaPlaylistFocusedMediaIdTrigger

▸ **mediaPlaylistFocusedMediaIdTrigger**(`media_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the focused media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:741](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L741)

___

### mediaPlaylistFocusedNextTrigger

▸ **mediaPlaylistFocusedNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the focused media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:724](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L724)

___

### mediaPlaylistFocusedPreviousTrigger

▸ **mediaPlaylistFocusedPreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the focused media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:732](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L732)

___

### mediaPlaylistFocusedTrigger

▸ **mediaPlaylistFocusedTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first item in the focused media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:703](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L703)

___

### mediaPlaylistNextFocus

▸ **mediaPlaylistNextFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the next media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:676](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L676)

___

### mediaPlaylistPlaylistIdFocus

▸ **mediaPlaylistPlaylistIdFocus**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:695](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L695)

___

### mediaPlaylistPlaylistIdMediaIdTrigger

▸ **mediaPlaylistPlaylistIdMediaIdTrigger**(`playlist_id`, `media_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |
| `media_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:794](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L794)

___

### mediaPlaylistPlaylistIdNextTrigger

▸ **mediaPlaylistPlaylistIdNextTrigger**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:775](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L775)

___

### mediaPlaylistPlaylistIdPreviousTrigger

▸ **mediaPlaylistPlaylistIdPreviousTrigger**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:784](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L784)

___

### mediaPlaylistPlaylistIdTrigger

▸ **mediaPlaylistPlaylistIdTrigger**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first item in the specified media playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:716](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L716)

___

### mediaPlaylistPreviousFocus

▸ **mediaPlaylistPreviousFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the previous media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:682](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L682)

___

### mediaPlaylistsGet

▸ **mediaPlaylistsGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all the configured media playlists.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all the configured media playlists.

#### Defined in

[propresenter.ts:630](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L630)

___

### messagesGet

▸ **messagesGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all configured messages.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all configured messages.

#### Defined in

[propresenter.ts:808](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L808)

___

### messagesIdClear

▸ **messagesIdClear**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Clears / Hides the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:855](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L855)

___

### messagesIdDelete

▸ **messagesIdDelete**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Deletes the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:837](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L837)

___

### messagesIdGet

▸ **messagesIdGet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified message.

#### Defined in

[propresenter.ts:823](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L823)

___

### messagesIdSet

▸ **messagesIdSet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the details of the specified message.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:830](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L830)

___

### playlistActiveAnnouncementFocus

▸ **playlistActiveAnnouncementFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves the focus to the currently active playlist for the announcement destination.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:946](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L946)

___

### playlistActiveAnnouncementIndexTrigger

▸ **playlistActiveAnnouncementIndexTrigger**(`index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the currently active playlist for the announcement destination.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1059](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1059)

___

### playlistActiveAnnouncementTrigger

▸ **playlistActiveAnnouncementTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first item in the currently active playlist for the announcement destination.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:968](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L968)

___

### playlistActiveGet

▸ **playlistActiveGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the active playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the active playlist.

#### Defined in

[propresenter.ts:913](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L913)

___

### playlistActivePresentationFocus

▸ **playlistActivePresentationFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves the focus to the currently active playlist for the presentation destination.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:938](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L938)

___

### playlistActivePresentationIndexTrigger

▸ **playlistActivePresentationIndexTrigger**(`index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the currently active playlist for the presentation destination.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1050](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1050)

___

### playlistActivePresentationTrigger

▸ **playlistActivePresentationTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first item in the currently active playlist for the presentation destination.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:960](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L960)

___

### playlistFocusedGet

▸ **playlistFocusedGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the currently focused playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the currently focused playlist.

#### Defined in

[propresenter.ts:920](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L920)

___

### playlistFocusedIndexTrigger

▸ **playlistFocusedIndexTrigger**(`index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the focused playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1041](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1041)

___

### playlistFocusedNextTrigger

▸ **playlistFocusedNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the currently focused playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:976](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L976)

___

### playlistFocusedPreviousTrigger

▸ **playlistFocusedPreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the currently focused playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:982](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L982)

___

### playlistFocusedTrigger

▸ **playlistFocusedTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first item in the currently focused playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:954](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L954)

___

### playlistIdentifierFocus

▸ **playlistIdentifierFocus**(`identifier`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves the focus to the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:999](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L999)

___

### playlistIdentifierIndexTrigger

▸ **playlistIdentifierIndexTrigger**(`identifier`, `index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1032](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1032)

___

### playlistIdentifierNextTrigger

▸ **playlistIdentifierNextTrigger**(`identifier`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1013](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1013)

___

### playlistIdentifierPreviousTrigger

▸ **playlistIdentifierPreviousTrigger**(`identifier`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1022](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1022)

___

### playlistIdentifierTrigger

▸ **playlistIdentifierTrigger**(`identifier`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the first item in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1006](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1006)

___

### playlistIdentifierUpdates

▸ **playlistIdentifierUpdates**(`identifier`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a chunked data update every time the specified audio playlist changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A chunked data update every time the specified audio playlist changes.

#### Defined in

[propresenter.ts:992](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L992)

___

### playlistNextFocus

▸ **playlistNextFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves the focus to the next playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:926](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L926)

___

### playlistPlaylistIdGet

▸ **playlistPlaylistIdGet**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of the items in the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Alist of the items in the specified playlist.

#### Defined in

[propresenter.ts:890](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L890)

___

### playlistPlaylistIdSet

▸ **playlistPlaylistIdSet**(`playlist_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the contents of the specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playlist_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:896](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L896)

___

### playlistPreviousFocus

▸ **playlistPreviousFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves the focus to the previous playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:932](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L932)

___

### playlistsGet

▸ **playlistsGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all configured playlists.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all configured playlists.

#### Defined in

[propresenter.ts:877](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L877)

___

### presentationActiveFocus

▸ **presentationActiveFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the active presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1183](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1183)

___

### presentationActiveGet

▸ **presentationActiveGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the currently active presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the currently active presentation.

#### Defined in

[propresenter.ts:1072](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1072)

___

### presentationActiveGroupGroup\_IdTrigger

▸ **presentationActiveGroupGroup_IdTrigger**(`group_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified group of the active presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `group_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1298](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1298)

___

### presentationActiveIndexTrigger

▸ **presentationActiveIndexTrigger**(`index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified cue of the active presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1248](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1248)

___

### presentationActiveNextTrigger

▸ **presentationActiveNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next cue of the active presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1233](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1233)

___

### presentationActivePreviousTrigger

▸ **presentationActivePreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous cue of the active presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1239](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1239)

___

### presentationActiveTimeline

▸ **presentationActiveTimeline**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current state of the active presentation timeline.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current state of the active presentation timeline.

#### Defined in

[propresenter.ts:1115](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1115)

___

### presentationActiveTimelineOperation

▸ **presentationActiveTimelineOperation**(`operation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Performs the requested timeline operation for the currently active presentation (play, pause, rewind).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation` | ``"pause"`` \| ``"play"`` \| ``"rewind"`` | (play, pause, rewind) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1129](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1129)

___

### presentationActiveTrigger

▸ **presentationActiveTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Retriggers the active presentation from the start.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1227](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1227)

___

### presentationChordChartGet

▸ **presentationChordChartGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current chord chart image (if available) at the given quality value.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current chord chart image (if available) at the given quality value.

#### Defined in

[propresenter.ts:1093](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1093)

___

### presentationChordChartUpdates

▸ **presentationChordChartUpdates**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a chunked data update every time the chord chart changes.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A chunked data update every time the chord chart changes.

#### Defined in

[propresenter.ts:1100](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1100)

___

### presentationFocusedGet

▸ **presentationFocusedGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Gets the currently focused presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The currently focused presentation.

#### Defined in

[propresenter.ts:1079](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1079)

___

### presentationFocusedGroupGroup\_IdTrigger

▸ **presentationFocusedGroupGroup_IdTrigger**(`group_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified group of the focused presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `group_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1289](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1289)

___

### presentationFocusedIndexTrigger

▸ **presentationFocusedIndexTrigger**(`index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified cue of the focused presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1219](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1219)

___

### presentationFocusedNextTrigger

▸ **presentationFocusedNextTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next cue of the focused presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1202](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1202)

___

### presentationFocusedPreviousTrigger

▸ **presentationFocusedPreviousTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous cue of the focused presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1210](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1210)

___

### presentationFocusedTimeline

▸ **presentationFocusedTimeline**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current state of the focused presentation timeline.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current state of the focused presentation timeline.

#### Defined in

[propresenter.ts:1122](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1122)

___

### presentationFocusedTimelineOperation

▸ **presentationFocusedTimelineOperation**(`operation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Performs the requested timeline operation for the currently focused presentation (play, pause, rewind).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation` | ``"pause"`` \| ``"play"`` \| ``"rewind"`` | (play, pause, rewind) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1138](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1138)

___

### presentationFocusedTrigger

▸ **presentationFocusedTrigger**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the focused presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1196](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1196)

___

### presentationNextFocus

▸ **presentationNextFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the next presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1171](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1171)

___

### presentationPreviousFocus

▸ **presentationPreviousFocus**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the previous presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1177](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1177)

___

### presentationSlideIndexGet

▸ **presentationSlideIndexGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the index of the current slide/cue within the currently active presentation.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The index of the current slide/cue within the currently active presentation.

#### Defined in

[propresenter.ts:1086](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1086)

___

### presentationUUIDFocus

▸ **presentationUUIDFocus**(`uuid`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the focus to the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1190](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1190)

___

### presentationUUIDFocusedTimelineOperation

▸ **presentationUUIDFocusedTimelineOperation**(`uuid`, `operation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Performs the requested timeline operation for the specified presentation (play, pause, rewind).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` |  |
| `operation` | ``"pause"`` \| ``"play"`` \| ``"rewind"`` | (play, pause, rewind) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1148](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1148)

___

### presentationUUIDGet

▸ **presentationUUIDGet**(`uuid`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified presentation.

#### Defined in

[propresenter.ts:1108](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1108)

___

### presentationUUIDGroupGroup\_IdTrigger

▸ **presentationUUIDGroupGroup_IdTrigger**(`uuid`, `group_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified group of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `group_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1308](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1308)

___

### presentationUUIDIndexTrigger

▸ **presentationUUIDIndexTrigger**(`uuid`, `index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified cue of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1280](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1280)

___

### presentationUUIDNextTrigger

▸ **presentationUUIDNextTrigger**(`uuid`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next cue of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1263](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1263)

___

### presentationUUIDPreviousTrigger

▸ **presentationUUIDPreviousTrigger**(`uuid`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous cue of the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1271](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1271)

___

### presentationUUIDThumbnailIndex

▸ **presentationUUIDThumbnailIndex**(`uuid`, `index`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a thumbnail image of the specified cue inside the specified presentation at the given quality value.

**`Retuns`**

A thumbnail image of the specified cue inside the specified presentation at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `index` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1162](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1162)

___

### presentationUUIDTrigger

▸ **presentationUUIDTrigger**(`uuid`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified presentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1257](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1257)

___

### propGet

▸ **propGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Gets a list of all the props.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all the props.

#### Defined in

[propresenter.ts:1322](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1322)

___

### propId

▸ **propId**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified prop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified prop.

#### Defined in

[propresenter.ts:1330](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1330)

___

### propIdClear

▸ **propIdClear**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Clears the specified prop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1353](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1353)

___

### propIdDelete

▸ **propIdDelete**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Deletes the specified prop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1338](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1338)

___

### propIdThumbnail

▸ **propIdThumbnail**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a thumbnail image of the specified prop at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A thumbnail image of the specified prop at the given quality value.

#### Defined in

[propresenter.ts:1361](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1361)

___

### propIdTrigger

▸ **propIdTrigger**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the specified prop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1346](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1346)

___

### stageLayoutIdDelete

▸ **stageLayoutIdDelete**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Deletes the specified stage layout.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1442](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1442)

___

### stageLayoutIdThumbnail

▸ **stageLayoutIdThumbnail**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a thumbnail image of the specified stage layout at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A thumbnail image of the specified stage layout at the given quality value.

#### Defined in

[propresenter.ts:1451](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1451)

___

### stageLayoutMap

▸ **stageLayoutMap**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the currently selected stage layout for each configured stage screen.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The currently selected stage layout for each configured stage screen.

#### Defined in

[propresenter.ts:1394](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1394)

___

### stageLayoutMapSet

▸ **stageLayoutMapSet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the specified stage message to the corresponding stage screens.
NOT READY

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1401](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1401)

___

### stageLayoutsGet

▸ **stageLayoutsGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of the configured stage layouts.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of the configured stage layouts.

#### Defined in

[propresenter.ts:1436](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1436)

___

### stageMessage

▸ **stageMessage**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Shows the specified stage message on the configured stage screen.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1379](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1379)

___

### stageMessageGet

▸ **stageMessageGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the currently active stage message.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The currently active stage message.

#### Defined in

[propresenter.ts:1373](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1373)

___

### stageMessageHide

▸ **stageMessageHide**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Hides the currently displayed stage message from the configured stage screen.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1385](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1385)

___

### stageScreenIdLayout

▸ **stageScreenIdLayout**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current stage layout for the specified stage screen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current stage layout for the specified stage screen.

#### Defined in

[propresenter.ts:1418](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1418)

___

### stageScreenIdLayoutId

▸ **stageScreenIdLayoutId**(`id`, `layout_id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the specified stage layout for the specified stage screen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `layout_id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1426](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1426)

___

### stageScreensGet

▸ **stageScreensGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of the configured stage screens.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of the configured stage screens.

#### Defined in

[propresenter.ts:1410](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1410)

___

### statusAudienceScreens

▸ **statusAudienceScreens**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the status of the audience screens.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The status of the audience screens.

#### Defined in

[propresenter.ts:1494](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1494)

___

### statusAudienceScreensSet

▸ **statusAudienceScreensSet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the status of the audience screens.
NOT READY

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1501](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1501)

___

### statusLayers

▸ **statusLayers**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the status of all available layers.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The status of all available layers.

#### Defined in

[propresenter.ts:1471](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1471)

___

### statusScreens

▸ **statusScreens**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of all configured screens.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of all configured screens.

#### Defined in

[propresenter.ts:1510](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1510)

___

### statusSlide

▸ **statusSlide**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current/next slide text and image UUIDs.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The Requests the current/next slide text and image UUIDs.

#### Defined in

[propresenter.ts:1517](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1517)

___

### statusStageScreens

▸ **statusStageScreens**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the status of the stage screens.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The status of the stage screens.

#### Defined in

[propresenter.ts:1478](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1478)

___

### statusStageScreensSet

▸ **statusStageScreensSet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the status of the stage screens.
NOT READY

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1485](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1485)

___

### statusUpdate

▸ **statusUpdate**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Aggregates the data from one or more streaming endpoints into a single streaming endpoint.
NOT READY

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1524](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1524)

___

### themesGet

▸ **themesGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a list of all configured themes and theme slides.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

A list of all configured themes and theme slides.

#### Defined in

[propresenter.ts:1538](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1538)

___

### themesIdGet

▸ **themesIdGet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the theme and theme slides.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the theme and theme slides.

#### Defined in

[propresenter.ts:1546](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1546)

___

### themesIdSlidesThemeSlide

▸ **themesIdSlidesThemeSlide**(`id`, `theme_slide`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified theme slide within the specified theme.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `theme_slide` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified theme slide within the specified theme.

#### Defined in

[propresenter.ts:1555](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1555)

___

### themesIdSlidesThemeSlideSet

▸ **themesIdSlidesThemeSlideSet**(`id`, `theme_slide`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the details of the specified theme slide within the specified theme.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `theme_slide` | `string` | NOT READY |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1566](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1566)

___

### themesIdSlidesThemeSlideThumbnail

▸ **themesIdSlidesThemeSlideThumbnail**(`id`, `theme_slide`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests a thumbnail image of the specified theme slide at the given quality value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `theme_slide` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified theme slide within the specified theme.

#### Defined in

[propresenter.ts:1578](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1578)

___

### timerCreate

▸ **timerCreate**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Creates a new timer with the specified details.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1600](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1600)

___

### timerIdDelete

▸ **timerIdDelete**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Deletes the specified timer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1637](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1637)

___

### timerIdGet

▸ **timerIdGet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the specified timer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the specified timer.

#### Defined in

[propresenter.ts:1622](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1622)

___

### timerIdOperation

▸ **timerIdOperation**(`id`, `operation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Performs the requested operation on the specified timer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` |  |
| `operation` | ``"stop"`` \| ``"start"`` \| ``"reset"`` | (start, stop, reset) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1647](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1647)

___

### timerIdSet

▸ **timerIdSet**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Sets the details of the specified timer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | NOT READY |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1630](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1630)

___

### timerSystemTime

▸ **timerSystemTime**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current system time.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current system time.

#### Defined in

[propresenter.ts:1655](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1655)

___

### timerVideoCountdown

▸ **timerVideoCountdown**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current value of the video countdown timer.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current value of the video countdown timer.

#### Defined in

[propresenter.ts:1662](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1662)

___

### timersCurrent

▸ **timersCurrent**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current time for all configured timers.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current time for all configured timers.

#### Defined in

[propresenter.ts:1607](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1607)

___

### timersGet

▸ **timersGet**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details for all configured timers.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details for all configured timers.

#### Defined in

[propresenter.ts:1592](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1592)

___

### timersOperation

▸ **timersOperation**(`operation`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Performs the requested operation for all configured timers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operation` | ``"stop"`` \| ``"start"`` \| ``"reset"`` | (start, stop, reset) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1614](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1614)

___

### transportLayerAutoAdvance

▸ **transportLayerAutoAdvance**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the auto-advance status for the specified layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"presentation"`` \| ``"announcement"`` | (presentation, announcement). |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The auto-advance status for the specified layer.

#### Defined in

[propresenter.ts:1741](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1741)

___

### transportLayerAutoAdvanceDelete

▸ **transportLayerAutoAdvanceDelete**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Cancels the auto-advance for the specified layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"presentation"`` \| ``"announcement"`` | (presentation, announcement). |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1748](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1748)

___

### transportLayerCurrent

▸ **transportLayerCurrent**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the details of the currently playing content for the specified layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"presentation"`` \| ``"announcement"`` | (presentation, announcement). |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The details of the currently playing content for the specified layer

#### Defined in

[propresenter.ts:1758](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1758)

___

### transportLayerGoToEnd

▸ **transportLayerGoToEnd**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves to the end on a certain layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"audio"`` \| ``"presentation"`` \| ``"announcement"`` | (presentation, announcement, audio) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1714](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1714)

___

### transportLayerPause

▸ **transportLayerPause**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Pauses the content on the specified layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"audio"`` \| ``"presentation"`` \| ``"announcement"`` | (presentation, announcement, audio) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1681](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1681)

___

### transportLayerPlay

▸ **transportLayerPlay**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Plays the content on the specified layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"audio"`` \| ``"presentation"`` \| ``"announcement"`` | (presentation, announcement, audio) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1674](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1674)

___

### transportLayerSkipBackwardTime

▸ **transportLayerSkipBackwardTime**(`layer`, `time`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves backward in the content on the specified layer by the specified number of seconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"audio"`` \| ``"presentation"`` \| ``"announcement"`` | (presentation, announcement, audio) |
| `time` | `number` | in seconds |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1689](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1689)

___

### transportLayerSkipForwardTime

▸ **transportLayerSkipForwardTime**(`layer`, `time`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves forward in the content on the specified layer by the specified number of seconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"audio"`` \| ``"presentation"`` \| ``"announcement"`` | (presentation, announcement, audio) |
| `time` | `number` | in seconds |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1702](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1702)

___

### transportLayerTime

▸ **transportLayerTime**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the current transport time for the specified layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"audio"`` \| ``"presentation"`` \| ``"announcement"`` | (presentation, announcement, audio) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The current transport time for the specified layer.

#### Defined in

[propresenter.ts:1722](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1722)

___

### transportLayerTimeSet

▸ **transportLayerTimeSet**(`layer`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Moves to the specified time for the specified layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | ``"audio"`` \| ``"presentation"`` \| ``"announcement"`` | (presentation, announcement, audio) |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1731](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1731)

___

### triggerAudioNext

▸ **triggerAudioNext**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the currently active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1781](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1781)

___

### triggerAudioPrevious

▸ **triggerAudioPrevious**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the currently active audio playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1787](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1787)

___

### triggerMediaNext

▸ **triggerMediaNext**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next item in the currently active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1769](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1769)

___

### triggerMediaPrevious

▸ **triggerMediaPrevious**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous item in the currently active media playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1775](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1775)

___

### triggerNext

▸ **triggerNext**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the next cue or item in the currently active playlist or library.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1793](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1793)

___

### triggerPrevious

▸ **triggerPrevious**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers the previous cue or item in the currently active playlist or library.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1799](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1799)

___

### version

▸ **version**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the general information about the currently active ProPresenter instance

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

General information about the currently active ProPresenter instance

#### Defined in

[propresenter.ts:1463](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1463)

___

### videoInputs

▸ **videoInputs**(): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Requests the contents of the video inputs playlist.

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

The contents of the video inputs playlist.

#### Defined in

[propresenter.ts:1810](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1810)

___

### videoInputsIdTrigger

▸ **videoInputsIdTrigger**(`id`): `Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

Triggers a video input from the video inputs playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<{ `command`: `string` ; `data`: `any` ; `status`: `number`  }\>

#### Defined in

[propresenter.ts:1817](https://github.com/JeffreyDavidsz/node-renewedvision-propresenter-api/blob/aa7012d/src/propresenter.ts#L1817)

