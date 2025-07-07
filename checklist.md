1. [CODE STYLE] - `getArea` function doesn't need to accept any parameters. All necessary values are already available as object fields
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

4. [CODE KNOWLEDGE] - When you declare a constructor parameter with an access modifier TypeScript implicitly creates a property on the class with the same name as the parameter and assigns the parameter value to that property. You don't need to do it manually.

BAD EXAMPLE:

```
constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
}
```

GOOD EXAMPLE:

```
constructor(a: number, b: number, c: number) {

}
```
