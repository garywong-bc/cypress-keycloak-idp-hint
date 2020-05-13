# nrm-cypress-keycloak

Cypress commands for Keycloak, customized for NRM

---

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install nrm-cypress-keycloak -D

Using [yarn](https://yarnpkg.com/):

    $ yarn add nrm-cypress-keycloak -D

Then with a module bundler like [webpack](https://webpack.github.io/), add the following line to `cypress/support/index.js`:

```js
// Using ES6
import 'nrm-cypress-keycloak';
// using CommonJS
require('nrm-cypress-keycloak');
```

---

### Usage

Two `cy` commands have been added:

- **`cy.logout({ ... })`**:
  - `root`: string
  - `realm`: string
  - `redirect_uri`: string
- **`cy.login({ ... })`**:
  - `root`: string
  - `realm`: string
  - `username`: string
  - `password`: string
  - `client_id`: string
  - `redirect_uri`: string

### Example:

```javascript
describe('thing', () => {
  beforeEach(() => {
    cy.login({
      root: 'https://sso-dev.pathfinder.gov.bc.ca',
      realm: 'idir',
      username: 'babangsund',
      password: 'bacon',
      client_id: 'frontend',
      redirect_uri: 'https://babangsund.com/',
    });
  });
  afterEach(() => {
    cy.logout({
      root: 'https://sso-dev.pathfinder.gov.bc.ca',
      realm: 'idir',
      redirect_uri: 'https://babangsund.com/',
    });
  });
});
```

### Credits

nrm-cypress-keycloak is 100% based upon cypress-keycloak, built and maintained by **babangsund**.  
[@blog](https://babangsund.com/).  
[@github](https://github.com/babangsund).  
[@twitter](https://twitter.com/babangsund).
