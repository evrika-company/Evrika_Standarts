# Evrika Standarts - Стандарты написания коммитов и управления версиями в компании Evrika

* [О важности стандартов в процессе разработки](#chapter1)
* [Что такое Evrika Standarts?](#chapter2)
* [Какие стандарты коммитов мы используем?](#chapter3)
* [Валидация и проверка коммитов на соотвествие стандартам](#chapter4)
* [Использование инструментов для автоматического управления версиями](#chapter5)
* [Зачем вести и использовать changelog ?](#chapter6) 
* [Вклад каждого члена команды](#chapter7)
* [Инструкция по установке и использованию](#chapter8)

## О важности стандартов в процессе разработки <a name="chapter1"></a>

Стандарты коммитов являются соглашением о структуре и формате сообщений коммитов в репозитории.Такие стандарты позволяют улучшить командное взаимодейсвтие и сделать другие процессы , такие как Code Review , CI более понятными. Мы в компании Evrika придерживаемся стандартов коммитов с целью упрощения совместной работы, повышения читаемости коммитов и облегчения автоматического управления версиями.

## Что такое Evrika Standarts? <a name="chapter2"></a>

Не для кого не секрет что современные процессы разработки программного обеспечения стремятся к автоматизации всех аспектов разработки,от написания кода и до его автоматического развертывания.Evrika Standarts это пакет с конфигурацией для инструментов автоматизации и пояснением о том как их использовать, тем самым внедрив и автоматизировав такие процессы как:

* *Соглашение по написанию коммитов в команде*
* *Валидация и проверка коммитов на соответсвие стандартам*
* *Семантическое версионирование проектов*
* *Ведение журнала изменения (Changelog)*

В конце находится подробная инструкция по уставновке пакета , дополнительных расширений и настройки их взаимодействия 

## Какие стандарты коммитов мы используем? <a name="chapter3"></a>

Мы придерживаемся [Conventional Commits](https://www.conventionalcommits.org/ru/v1.0.0/) — популярный стандарт коммитов, который определяет шаблон и набор ключевых слов для сообщений коммитов. Структура Conventional Commits включает тип коммита, необязательную область и описание изменений.В качестве инструмента автоматизации процесса создания коммита мы используем [Commitizen](https://commitizen-tools.github.io/commitizen/) за его гибкость и возможность собственной конфигурации Мы используем следующие типы коммитов: 

+ __build__ - *изменения процесса сборки*
+ __package__ - *добавление или удаление внешних зависимостей*
+ __change__ - *стандартные изменения по проекту*
+ __ci/cd__ - *конфигурация CI или изменения CD параметров*
+ __docs__ - *добавление или изменения документации*
+ __feat__ - *создание нового функционала*
+ __fix__ - *исправление багов(именно багов не фич)*
+ __perf__ - *улучшения направленные на производительность*
+ __refactor__ - *реструктуризация и улучшения кода*
+ __revert__ - *отмена и возврат на предыдущий коммит*
+ __style__ -  *правки по стилю кода и линтированию*
+ __test__ - *добавление тестов или изменение процесса тестирования*
+ __custom__ - *изменения имеющие специфичную область действия*
+ __security__ - *исправление уязвимостей или улучшение безопасности*
+ __BREAKING CHANGE__ - *координальные изменения в архитектуре или в системе проекта*

Стоит отметить что как правило тип коммита указывает на определенную область изменения : *__feat__(components)* .Такой формат коммитов позволяет быстро понять, какие изменения вносились в проект и какие семантические изменения они вносят. У нас в команде область действия для типа коммита носит необязательный характер но его использование с кастомным значения радует.Так же мы стараемся соблюдать и соглашение по стилевому оформлению самих коммитов. Оно включает в себе такие какзалось бы мелочи вроде - максимальной длины тела коммита,регистр символов, обязательные и не обязательные состовляющие , следует ли ставить в конце коммита точку.

## Валидация и проверка коммитов на соотвествие стандартам  <a name="chapter4"></a>

Проверка коммитов имеет важное значение для поддержания согласованности и структурированности истории изменений в проектах нашей команды.Мы используем [Commitlint](https://github.com/conventional-changelog/commitlint) , он обеспечивает единообразие формата сообщений коммитов, повышает их читаемость и помогает лучше понять внесенные изменения. 

## Использование инструментов для автоматического управления версиями <a name="chapter5"></a>

В процессе разработки проекта для соблюдении стандартов коммитов наша команда старается соблюдать и [спецификацию по семантическому версионированию проектов](https://semver.org/lang/ru/spec/v2.0.0.html).Использование инструментов управления версиями тесно интегрировано с соглашением по коммитам , наш выбор пал на интрумент [release-it](https://github.com/release-it/release-it/tree/main). Он обеспечивает всесторонню поддержу принятых нами соглашений и имеет большой набор конфигураций и плагинов.Основные детали версионирования на которые влияет соглашения по офрмлению коммитов:

+ __fix__ - *коммит типа исправления ошибок соответствует PATCH в Cемантическом Версионировании. __1.2.3__ - __1.2.4__* 
+ __feat__ - *создание нового функционала соответствует MINOR в Cемантическом Версионировании. __1.4.7__ - __1.5.0__*
+  __BREAKING CHANGE__ - *координальные изменения в архитектуре или в системе соответствует MAJOR в Cемантическом Версионировании. __2.3.4__ - __3.0.0__*


Мы стремимся поддерживать стандарты коммитов и использовать инструменты управления версиями, чтобы наши проекты были лучше структурированы, более управляемыми и способствовали эффективному сотрудничеству между всеми разработчиками компании Evrika.

## Зачем вести и использовать changelog ? <a name="chapter6"></a>

Еще одной хорошей практикой грамотно выстроенного процесса разработки является ведение и использование - журнала изменений.Это позволяет нам фиксировать каждое изменение, включая новые функции, улучшения и исправления, по мере их внесения в код.При ведении Changelog , наша команда опирается на [следующие правила и соглашения](https://keepachangelog.com/ru/1.1.0/).Мы используем систему версионирования для управления изменениями и версиями нашего продукта. Каждое обновление в changelog связано с конкретной версией, что облегчает отслеживание и связывание изменений с определенными релизами.

Для генерации __CHANGELOG.md__ мы используем уже ранее упомянутый [release-it](https://github.com/release-it/release-it/tree/main) вместе с [плагином](https://github.com/release-it/conventional-changelog) для поддержки прянятого стандарта форматирования коммитов

## Вклад каждого члена команды <a name="chapter7"></a>

При соблюдении стандартов коммитов и использовании инструментов управления версиями каждый разработчик нашей команды играет роль в поддержании и соблюдении этих стандартов.Структурированные и понятные коммиты помогают нам лучше и легче понимать историю проекта, облегчают ревью кода и содействуют эффективной разработке.

Мы стремимся поддерживать стандарты коммитов и использовать инструменты управления версиями, чтобы наши проекты были лучше структурированы, более управляемыми и способствовали эффективному сотрудничеству между всеми разработчиками компании Evrika

## Инструкция по установке и использованию <a name="chapter8"></a>

>  __Инструкция по установке и использованию - [Evrika_Standarts package](./MANUAL.md)__
 
