"use strict";

import { commitTypes } from "../conventional_commits";

const getCommitTypesToChangelock = function(types) {
    return types.map((element) => {
        let type = {};

        type.type = element.value;
        element.section ? type.section = element.section : type.hidden = element.hidden;

        return type
    })
};

module.exports = {
    "header": 'Журнал изменений',
    "types": [
        ...getCommitTypesToChangelock(commitTypes)
    ],
    "preMajor": false,
}