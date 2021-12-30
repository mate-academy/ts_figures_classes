1. [CODE STYLE] - ```getArea``` function doesn't need to accept any parameters. All necessary values are already available as object fields
2. [CODE STYLE] - Enum constant names usually start with capital letter. Values can have any case that's necessary.

BAD EXAMPLE:
```
export enum Directions {
  up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT',
}
```

GOOD EXAMPLE:
```
export enum Directions {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

3. [CODE STYLE] - If you throw an error try to provide its detailed description in error message.

BAD EXAMPLE:
```
if (x % 2 !== 0) {
  throw new Error('Something went wrong')
}
```

GOOD EXAMPLE:
```
if (x % 2 !== 0) {
  throw new Error('Resulting value should be even number')
}
```
