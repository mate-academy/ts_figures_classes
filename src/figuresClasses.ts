
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

function formatNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

function checkLength(...args: number[]):void {
  if (!args.every((size) => size > 0)) {
    throw new Error('each side must be greater than zero');
  }
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'triangles sides must be less than the sum of the two other sides',
      );
    }

    checkLength(a, b, c);
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimetr = (a + b + c) / 2;
    const area = Math.sqrt(semiperimetr
      * (semiperimetr - a)
      * (semiperimetr - b)
      * (semiperimetr - c));

    return formatNumber(area);
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkLength(radius);
  }

  getArea(): number {
    return formatNumber(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkLength(width, height);
  }

  getArea(): number {
    return formatNumber(this.width * this.height);
  }
}

export function getInfo(figure: Figure):string {
  const { shape, color } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
