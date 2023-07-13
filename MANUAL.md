# Инструкция по установке и использованию - Evrika Standarts
 
1. [Установка nvm и Node.js](#chapter1)
2. [Установка пакета - Evrika_Standarts](#chapter2)
3. [Подключение и установка Commitizen и его адаптеров в проект](#chapter3)
4. [Добавление пакета версионирования release-it, настройка конфигурации CHANGELOG](#chapter5)
5. [Начинаем использование Evrika_Standarts](#chapter6)
6. [Часто задаваемые вопросы и ответы на них](#charter7)


## Шаг 1 : Установка nvm для управления Node.js <a name="chapter1"></a>

__1.Установка nvm:__

Для пользователей Linux и macOS можно выполнить установку NVM, используя curl:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Или использовать wget:

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Для пользователей Windows существует NVM для Windows, который можно загрузить с официального сайта проекта NVM: https://github.com/coreybutler/nvm-windows.

__2.Проверка установленной версии nvm :__

После успешной установки NVM перезагрузите ваш терминал или командную строку, чтобы активировать изменения.
Для проверки установки выполните :

```sh
nvm -v
```

__3.Установка Node.js :__

Просмотр доступных версий Node.js :

```sh
nvm ls-remote
```

Установка определенной версии Node.js :

```sh
nvm install <version>
```

Например, для установки Node.js версии 18.16.1, выполните:

```sh
nvm install 18.16.1
```

Для активации уставновленной версии выполните :

```sh
nvm use <version>
```

Пример активации для версии 18.16.1 :

```sh
nvm use 18.16.1
```

__4.Проверка установленной версии Node.js :__

```sh
node -v
```

## Шаг 2 : Установка пакета Evrika_Standarts <a name="chapter2"></a>


## Шаг 3 : Подключение и установка Commitizen и его адаптеров в проект <a name="chapter3"></a>


## Шаг 4 : Добавление пакета версионирования release-it , настройка конфигурации CHANGELOG <a name="chapter4"></a>


## Шаг 5 : Начинаем использование Evrika_Standarts <a name="chapter5"></a>


## Часто задаваемые вопросы и ответы на них