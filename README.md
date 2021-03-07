# Qimpl Stylelint config

Qimpl Stylelint shared configuration

[![NPM](https://img.shields.io/npm/v/@qimpl/stylelint-config.svg)](https://www.npmjs.com/package/@qimpl/stylelint-config)

# Usage

```sh
npx install-peerdeps --dev @qimpl/stylelint-config
```

## Default

`.stylelintrc.js` content to use default config

```js
module.exports = {
  extends: '@qimpl/stylelint-config',
};
```

## Styled component

There is the `.stylelintrc.js` needed when using styled-component

```js
module.exports = {
  extends: '@qimpl/stylelint-config/styled-components',
};
```
