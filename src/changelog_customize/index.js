"use strict";

const conventionalCommits = require('../conventional_commits/index');

const getCommitTypesToChangelock = function(types) {
    return types.map(function(element) {

      let typeCommit = {
          "type": element.value,
        };

        element.section ? typeCommit.section = element.section : typeCommit.hidden = element.hidden;
        return typeCommit
    })
};

module.exports = {
  "types": [
    ...getCommitTypesToChangelock(conventionalCommits.commitTypes),
    {}
  ],
}