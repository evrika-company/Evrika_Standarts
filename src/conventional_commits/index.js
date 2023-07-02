"use strict";

module.exports = { 
  "commitTypes": [
      {
        "value": "build",
        "name": "build: Изменения процесса сборки",
        "hidden": true,
        "emoji": ":hammer:", 
      },
      {
        "value": "package",
        "name": "package: Добавление или удаление внешних зависимостей",
        "section": "Изменения внешних зависимостей",
        "emoji": ":package:", 
      },
      {
        "value": "change",
        "name": "change: Стандартные изменения по проекту",
        "hidden": true,
        "emoji": ":twisted_rightwards_arrows:", 
      },
      {
        "value": "ci/cd",
        "name": "ci/cd: Конфигурация CI или изменения CD параметров",
        "hidden": true,
        "emoji": ":rocket:", 
      },
      {
        "value": "docs",
        "name": "docs: Добавление или изменения документации",
        "hidden": true,
        "emoji": ":memo:", 
      },
      {
        "value": "feat",
        "name": "feat: Создание нового функционала",
        "section": "Новый функционал",
        "emoji": ":triangular_flag_on_post:", 
      },
      {
        "value": "fix",
        "name": "fix: Исправление багов(именно багов не фич)",
        "section": "Исправления ошибок",
        "emoji": ":bug:", 
      },
      {
        "value": "perf",
        "name": "perf: Улучшения направленные на производительность",
        "section": "Улучшения производительности",
        "emoji": ":zap:", 
      },
      {
        "value": "refactor",
        "name": "refactor: Реструктуризация и улучшения кода",
        "hidden": true,
        "emoji": ":recycle:", 
      },
      {
        "value": "revert",
        "name": "revert: Реструктуризация и улучшения кода",
        "hidden": true,
        "emoji": ":rewind:", 
      },
      {
        "value": "style",
        "name": "style: Правки по стилю кода и линтированию",
        "hidden": true,
        "emoji": ":lipstick:", 
      },
      {
        "value": "test",
        "name": "test: Добавление тестов или изменение процесса тестирования",
        "hidden": true,
        "emoji": ":white_check_mark:", 
      },
      {
        "value": "custom",
        "name": "custom: Изменения имеющие специфичную область действия",
        "hidden": true,
        "emoji": ":wrench:", 
      },
      {
        "value": "security",
        "name": "security: Исправление уязвимостей или улучшение безопасности",
        "section": "Улучшения безопасности",
        "emoji": ":lock:", 
      },
      {
        "value": "BREAKING CHANGE:",
        "name": "BREAKING CHANGE:: Координальные изменения в архитектуре или в системе проекта",
        "section": "Координальные изменения в проекте",
        "emoji": ":boom:", 
      }
  ],
  scopeTypes: [
    { 
      "name": `custom`,
    },
    { 
      "name": "style" ,
    },
    { 
      "name": "git" ,
    },
    { 
      "name": "scripts" ,
    },
    { 
      "name": "components" ,
    },
    { 
      "name": "code" ,
    },
    { 
      "name": "files" ,
    },
    { 
      "name": "config" ,
    },
  ]
}