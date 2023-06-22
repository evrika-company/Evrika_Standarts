"use strict";

import { commitTypes, scopeTypes } from "../conventional_commits";

const getCommitTypesToCommitizen = function(types) {
  return types.map((type) => 
    {
      "value": type.value,
      "name": type.name,
    }
  )
};

module.exports = {
  types: [
    ...getCommitTypesToCommitizen(commitTypes)
  ],

  scopes: [
    ...scopeTypes
  ],

  messages: {
    type: "Какое изменение вы вносите?",
    scope: "Выберите ОБЛАСТЬ, которую вы изменили (опционально):",
    customScope: "Укажите собственную ОБЛАСТЬ:",
    subject: "Введите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n",
    body: 'Введите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: "Список BREAKING CHANGES (опционально):\n",
    footer: "Место для мета-данных (тикетов, ссылок и другой информации). Например: MRKT-700, MRKT-800:\n",
    confirmCommit: "Вы уверены, что хотите выполнить данный коммит?",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['fix'],
  footerPrefix: "Мета-данные:",
  subjectLimit: 72,
}