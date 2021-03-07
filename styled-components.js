module.exports = {
  extends: ['./index.js', 'stylelint-config-styled-components'],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'value-keyword-case': null,
  },
};
