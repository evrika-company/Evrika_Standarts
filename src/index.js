const changelog = require('./changelog_customize/index');
const customize = require('./commitizen_customize/index');
const commitlint = require('./commitlint_customize/index');

module.exports = {
  customize,
  changelog,
  commitlint,
};