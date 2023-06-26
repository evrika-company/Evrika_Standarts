"use strict";

module.exports = { 
  commitTypes: [
    {
      value: 'build',
      name: 'build:      Изменения процесса сборки',
      hidden: true,
    },
    {
      value: 'package',
      name: 'package:      Добавление или удаление внешних зависимостей',
      section: 'Изменения внешних зависимостей',
    },
    {
      value: 'change',
      name: 'change:      Стандартные изменения по проекту',
      hidden: true,
    },
    {
      value: 'ci/cd',
      name: 'ci/cd:      Конфигурация CI или изменения CD параметров',
      hidden: true,
    },
    {
      value: 'docs',
      name: 'docs:      Добавление или изменения документации',
      hidden: true,
    },
    {
      value: 'feat',
      name: 'feat:      Создание нового функционала',
      section: 'Новый функционал',
    },
    {
      value: 'fix',
      name: 'fix:     Исправление багов(именно багов не фич)',
      section: 'Исправления ошибок',
    },
    {
      value: 'perf',
      name: 'perf:      Улучшения направленные на производительность',
      section: 'Улучшения производительности',
    },
    {
      value: 'refactor',
      name: 'refactor:      Реструктуризация и улучшения кода',
      hidden: true,
    },
    {
      value: 'revert',
      name: 'revert:      Реструктуризация и улучшения кода',
      hidden: true,
    },
    {
      value: 'style',
      name: 'style:      Правки по стилю кода и линтированию',
      hidden: true,
    },
    {
      value: 'test',
      name: 'test:      Добавление тестов или изменение процесса тестирования',
      hidden: true,
    },
    {
      value: 'custom',
      name: 'custom:      Изменения имеющие специфичную область действия',
      hidden: true,
    },
    {
      value: 'security',
      name:'security:      Исправление уязвимостей или улучшение безопасности',
      section: 'Улучшения безопасности',
    },
    {
      value: 'BREAKING CHANGE:',
      name:'BREAKING CHANGE::      Координальные изменения в архитектуре или в системе проекта',
      section: 'Координальные изменения в проекте',
    }
  ],
  scopeTypes: [
    { name: ""},
    { name: `custom`},
    { name: "style" },
    { name: "git" },
    { name: "scripts" },
    { name: "components" },
    { name: "code" },
    { name: "files" },
    { name: "config" },
  ]
}