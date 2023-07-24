"use strict";

const conventionalCommits = require('../conventional_commits/index');

const getCommitTypesToCommitizen = function(types) {
  return types.map(function(type) { 
    return { 
      "value": type.value, 
      "emoji": type.emoji, 
      "name": type.name,
    }
  })
};


module.exports = {
  types: [
    ...getCommitTypesToCommitizen(conventionalCommits.commitTypes)
  ],

  scopes: [
    ...conventionalCommits.scopeTypes
  ],

  messages: {
    type: "Какое изменение вы вносите?",
    scope: "Выберите ОБЛАСТЬ, которую вы изменили (опционально):",
    customScope: "Укажите собственную ОБЛАСТЬ:",
    subject: "Введите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении. Используйте "|" для новой строки:\n",
    body: 'Введите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: "Список BREAKING CHANGES (опционально). Используйте "|" для новой строки:\n",
    footer: "Место для мета-данных (тикетов, ссылок и другой информации). Например: MRKT-700, MRKT-800:\n",
    confirmCommit: "Вы уверены, что хотите выполнить данный коммит?",
    footerPrefixSelect: 'Выберите тип проблем в списке изменений с помощью этого изменения (опционально):',
    customFooterPrefix: 'Введите тип проблемы:',
    generatingByAI: 'Генерация заголовка вашего коммита AI...',
    generatedSelectByAI: 'Выберите подходящий заголовок, сгенерированный AI:',
  },

  allowCustomScopes: true,
  allowEmptyScopes: true,
  allowBreakingChanges: ['fix'],
  footerPrefix: "Мета-данные:",
  subjectLimit: 120,
  useEmoji: false,
  emojiAlign: 'center',
  markBreakingChangeMode: false,
  breaklineNumber: 100,
  breaklineChar: '|',
  skipQuestions: [],
  issuePrefixes: [],
  useAI: false,
  aiNumber: 1, 
  customScopesAlign: 'bottom',
  customScopesAlias: 'custom',
  emptyScopesAlias: 'empty',
  upperCaseSubject: false,
  customIssuePrefixAlign: 'top',
  emptyIssuePrefixAlias: 'skip',
  customIssuePrefixAlias: 'custom',
  defaultBody: '',
  defaultIssues: '',
  defaultScope: '',
  defaultSubject: '',
  confirmColorize: true,
  allowCustomIssuePrefix: true,
  allowEmptyIssuePrefix: true,
  scopeOverrides: undefined,
}