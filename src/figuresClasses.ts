type StringShape = 'triangle' | 'circle' | 'rectangle';
type StringColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: StringShape;
  color: StringColor;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: StringShape = 'triangle';

  constructor(
    public color: StringColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];

    if (sides.some((side) => (side <= 0))) {
      throw new Error('Length of sides must be greater than 0.');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The given sides cannot form a triangle.');
    }
  }

  getArea(): number {
    const [a, b, c] = [this.a, this.b, this.c];
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: StringShape = 'circle';

  constructor(
    public color: StringColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: StringShape = 'rectangle';

  constructor(
    public color: StringColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
