function round(n: number): number {
  return Math.trunc(n * 100) / 100;
}

type Shape = 'triangle'|'circle'|'rectangle';
type Color = 'red'|'green'|'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

abstract class ColorOfShape {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
  ) {}
}

export class Triangle extends ColorOfShape implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super(color);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All side must be a positive number');
    }

    const sides = [a, b, c];
    const max = Math.max(...sides);
    const [min1, min2] = sides.filter((item) => item !== max);

    if (max >= min1 + min2) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = 1 / 2 * (this.a + this.b + this.c);

    return round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle extends ColorOfShape implements Figure {
  shape: Shape = 'circle';

  constructor(
    color: Color,
    public radius: number,
  ) {
    super(color);

    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle extends ColorOfShape implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    color: Color,
    public width: number,
    public height: number,
  ) {
    super(color);

    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height must be a positive number');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
