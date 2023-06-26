"use strict";

const conventionalCommits = require('../conventional_commits/index');

const getCommitTypesToChangelock = function(types) {
    return types.map(function(element) {
        //console.log(element,33)
        let typeCommit = {
          "type": element.value,
        };

        element.section ? typeCommit.section = element.section : typeCommit.hidden = element.hidden;
        console.log(typeCommit,333)
        return typeCommit
    })
};

module.exports = {
      "name": "conventionalcommits",
      "types": [
        ...getCommitTypesToChangelock(conventionalCommits.commitTypes),
        {}
      ],
}

// console.log(999,{
//     "infile": "CHANGELOG.md",
//     "header": "Журнал изменений",
//     "preset": {
//       "name": "conventionalcommits",
//       "types": [
//         ...getCommitTypesToChangelock(conventionalCommits.commitTypes)
//       ],
//     }})