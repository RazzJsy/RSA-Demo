# RSA-Demo React Application + Tests

This project was created using React to meet the specified requirements laid out in the provided brief and wireframe.

In addition to the main application the repository contains a suite of (Cypress) tests for each of the main components used to construct the app.

## Installation

Once you have cloned the repository, navigate to the root project directory (`/rsa-demo`) and run the following commands:

#### `npm install`
#### `npm start`

##### `If running on a Linux or MacOs machine please edit the package.json file in the root directory file with the following:`

```haskell
replace: "set PORT=3001"
with:    "PORT=3001"
```

The application has been configured to load simultaneously both the mock-api and the application from the one command (using [concurrently](https://www.npmjs.com/package/concurrently)). This does however mean the ports are fixed (these can however be amended in package.json "start" parameter):

```haskell
app: 3001
api: 3002
```

If the ports are changed then the relevant port will need to be updated in the code which are referenced in `./src/webpages/homeInsurance/homeInsurance.js`.

## Tests

The solution contains tests for the main components:

- addon
- header
- quote

The test consume a fixed set of date defined in their relevant fixtures *.json file (i.e. addon.json contains the data to populate the addon component tests).

### Run the tests

From the root directory type:

#### `npx cypress open`

In the window that opens select '*Component Testing*' and in the next window select your preferred browser (i.e. Chrome) and click '*Start Component Testing in ...*'.

Once you have done this a browser window will open. In the browser window select '*Specs*' from the menu on the left and you will be presented with a list of components. Selecting each one will load the relevant tests for the selected component.