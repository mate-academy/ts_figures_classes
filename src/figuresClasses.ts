enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundedDown(number: number): number {
  return Math.floor(number * 100) / 100;
}

function negativeNumber(numbers: number[]):boolean {
  const validNumbers = numbers.filter((num) => num <= 0);

  if (validNumbers.length <= 0) {
    return false;
  }

  throw new Error('all numbers must be positive');
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);
    const areaA = Math.sqrt(semiperimeter * (semiperimeter - this.a)
    * (semiperimeter - this.b) * (semiperimeter - this.c));

    return roundedDown(areaA);
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arraySides = [a, b, c];
    const sides = arraySides.sort((current, next) => next - current);

    negativeNumber(arraySides);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(`the longest side of a triangle is more or equal
      than a sum of two others`);
    }
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  getArea():number {
    return roundedDown(this.radius ** 2 * Math.PI);
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    negativeNumber([radius]);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  getArea():number {
    return roundedDown(this.width * this.height);
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    negativeNumber([width, height]);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
