## React & Marvel API

[![Netlify Status](https://api.netlify.com/api/v1/badges/e826d503-fdb4-4907-a119-e163b94bc748/deploy-status)](https://app.netlify.com/sites/marvelapiheroes/deploys)

### [Live Demo](https://marvelapiheroes.netlify.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack

* [React](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://github.com/typicode/husky)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Cypress](https://www.cypress.io/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

## Install

First you need to clone and then, run the command bellow to install all dependences:

### `yarn install`

## !Important

This application uses enviroment variables as the [Marvel API](https://developer.marvel.com/) key, so you need to include a `.env` file with the following `.env.sample` file:
```
PORT=5001
SKIP_PREFLIGHT_CHECK=true
REACT_APP_MARVEL_SERVICE_ENDPOINT=https://gateway.marvel.com/
REACT_APP_MARVEL_API_KEY={YOUR_API_PUBLIC_KEY}
```

You can simply copy the contents of the `.env.sample` to a new `.env` file and add the API key at the `REACT_APP_MARVEL_API_KEY` variable.

### !!! ATENTION: DOT NOT COMMIT YOUR ENVIROMENT (`.env`) FILES !!!

## Run

To execute the project:

### `yarn start`

App will run in the development mode.<br />
Open [http://localhost:5001](http://localhost:5001) to view it in the browser.
This application is provided with hot reload in any code edition and linters to help maitain the pattern.

## Running with Docker:

Build image and create container

### `docker-compose build`

Run application

### `docker-compose up react-app`

Stop container

### `docker-compose stop`

Remove container

### `docker-compose down`

## Tests

This application is also provided with unit tests and end-to-end tests.

Unit tests:

### `yarn test:unit`


 End-to-ened tests:
### `yarn test:e2e`

Launches the [Cypress](https://docs.cypress.io/) test runner to run the End-to-end Tests. Important: your application should be running on background to execute e2e tests properly.

## Production Build

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Performance

This application aims to meet the requirements of [Core Web Vitals](https://web.dev/vitals/?gclid=EAIaIQobChMIzcPQr9SG8AIVjIiRCh1GVgY-EAAYASAAEgL4IfD_BwE).
You can check performance through [Pagespeed](https://developers.google.com/speed/pagespeed/insights/?hl=pt-br&url=https%3A%2F%2Fmarvelapiheroes.netlify.app%2F).

![Pagespeed](public/performance-pagespeed.png?v=4&s=250)
