## React & Marvel API

[![Netlify Status](https://api.netlify.com/api/v1/badges/e826d503-fdb4-4907-a119-e163b94bc748/deploy-status)](https://app.netlify.com/sites/marvelapiheroes/deploys)

### [Live Demo](https://marvelapiheroes.netlify.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

First you need to clone and after that run the command bellow to install all dependences:

### `yarn install`

## Run

To run the project, execute:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## !Important

This application uses enviroment variables as the [Marvel API](https://developer.marvel.com/) apikey, so you need to include a `.env` file with the following `.env.sample` file:
```
PORT=5001
SKIP_PREFLIGHT_CHECK=true
REACT_APP_MARVEL_SERVICE_ENDPOINT=https://gateway.marvel.com/
REACT_APP_MARVEL_API_KEY={YOUR_API_PUBLIC_KEY}
```

You can simply copy the contents of the `.env.sample` to a new `.env` file.

### !!! ATENTION: NEVER COMMIT YOUR `.env` FILES !!!


This application is provided with hot reload in any code edition and linters to help maitain the pattern.

## Tests

This application is also provided with unit tests and end-to-end tests.

To run unit tests:

### `yarn test:unit`


 To run e2e tests:
### `yarn test:e2e`

Launches the [Cypress](https://docs.cypress.io/) test runner to run the End to End Tests. Important: your application should be running on background to execute e2e tests properly.

## Production Build

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
