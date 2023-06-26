"use strict";

const conventionalCommits = require('../conventional_commits/index');

const getCommitTypesToChangelock = function(types) {
    return types.map(function(element) {
        let typeCommit = {
          "type": element.value,
        };

        element.section ? typeCommit.section = element.section : typeCommit.hidden = element.hidden;
        console.log(typeCommit,333)
        return typeCommit
    })
};

module.exports = {
    "infile": "CHANGELOG.md",
    "header": 'Журнал изменений',
    "preset": {
      "types": [
        ...getCommitTypesToChangelock(conventionalCommits.commitTypes)
      ],
    }
}