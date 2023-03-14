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

>> I've added the command to the original API. This way you can see from which command the returned data is.

## API

