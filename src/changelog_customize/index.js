"use strict";

const conventionalCommits = require('../conventional_commits/index');

const getCommitTypesToChangelock = function(types) {
    return types.map((element) => {
        let type = {};

        type.type = element.value;
        element.section ? type.section = element.section : type.hidden = element.hidden;

        return type
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