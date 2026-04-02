# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm test          # lint + run all tests
npm run test:only # run tests only (skip lint)
npm run lint      # prettier format + eslint
npm run format    # prettier only
```

To run a single test file directly:

```bash
npx jest src/figuresClasses.test.ts
```

## Task

Implement `src/figuresClasses.ts`. Everything else is read-only.

The file exports:

- `Figure` — interface with `shape`, `color`, and `getArea()`
- `Triangle`, `Circle`, `Rectangle` — classes implementing `Figure`
- `getInfo(figure)` — returns `'A {color} {shape} - {area}'`

Key constraints from tests:

- `getArea()` rounds **down** to hundredths (e.g. Circle r=6 → `113.09`, not `113.10`)
- Triangle throws if any side <= 0, or longest side >= sum of other two
- `getInfo` result format: `'A red triangle - 59.81'` (capital A, no decimal if whole number)

## Правила работы

Это учебный проект. Цель — научиться писать TypeScript самостоятельно.

- Не пиши код за меня
- Не подсказывай готовые решения
- Если я спрашиваю "как сделать X" — объясни концепцию, но не давай готовый код
- Если я показываю код — скажи только правильно или нет, и о чём подумать
