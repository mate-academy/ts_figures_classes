export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Value one of the sides can not less than 0');
    }

    const maxSideLength = Math.max(a, b, c);
    const isValid = a + b + c - maxSideLength > maxSideLength;

    if (!isValid) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - a) *
        (semiperimeter - b) *
        (semiperimeter - c),
    );

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter radius value bigger than 0');
    }

    this.shape = 'circle';
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter width or height value bigger than 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return parseFloat(area.toFixed(2));
  }
}

export function getInfo(figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
