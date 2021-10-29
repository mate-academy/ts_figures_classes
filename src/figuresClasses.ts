enum ShapeType {
  Tringle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

type Color = 'red' | 'blue' |'green';

export interface Figure {
  shape: ShapeType,
  color: Color,
  getArea(): number
}

function isValidLengths(...args: number[]):boolean {
  return args.every((lenght: number) => lenght > 0);
}

export class Triangle implements Figure {
  shape = ShapeType.Tringle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!isValidLengths(a, b, c)) {
      throw new Error('All sides of tringle must be > 0!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The longest side of a triangle must be >= than a sum of two others!',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = ShapeType.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!isValidLengths(radius)) {
      throw new Error('Radius must be > 0!');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = ShapeType.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!isValidLengths(width, height)) {
      throw new Error('Both sides of rectangle must be > 0!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
