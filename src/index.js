// точка входа для экспорта конфигурации

const changelog = require('./changelog_customize/index');
const customize = require('./commitizen_customize/index');
const commitlint = require('./commitlint_customize/index');
const conventional = require('./conventional_commits/index');

module.exports = {
  customize,
  changelog,
  commitlint,
  conventional,
};