### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dimka-zvd/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dimka-zvd/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/1b57c7d8de77c0537b5f/maintainability)](https://codeclimate.com/github/Dimka-zvd/frontend-project-44/maintainability)
# Игры разума
[![asciicast](https://asciinema.org/a/bSEayjgsy75d8HbBl8jSggpGq.svg)](https://asciinema.org/a/bSEayjgsy75d8HbBl8jSggpGq)
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение четного числа.
- Определение наибольшего общего делителя.
- Определение простого числа.

## Пример игры:
```
brain-progression
Welcome to the Brain Game!
May I have your name? Maksim
Hello, Maksim!
What number is missing in the progression?
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Maksim!
```
# Installation:
Минимальные требования: node.js : 22+

Скопируйте репозиторий командой:
```
git clone https://github.com/klerok/frontend-project-44.git
```
или
```
git clone git@github.com:klerok/frontend-project-44.git
```

Для установки проекта выполните команду:
```
make install
```
## Локальная установка пакета.
Из директории проекта запустите команды:
```
make publish
npm link
```
После установки пакета, игры можно запускать командами:

Каждая команда отвечает за запуск отдельной игры.
```
brain-even
```
```
brain-calc
```
```
brain-gcd
```
```
brain-progression
```
```
brain-prime
```