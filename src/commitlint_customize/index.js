"use strict";

const conventionalCommits = require('../conventional_commits/index');

export default {
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-max-length": [
      2,
      "always",
      72
    ],
    "scope-case": [2, "always", "lower-case"],
    'scope-enum': [
      1,
      'always',
      conventionalCommits.scopeTypes.map(type => type.name)
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      conventionalCommits.commitTypes.map(type => type.value)
    ]
  }
}