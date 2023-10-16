type Shape = 'triangle' | 'circle' |'rectangle';
type Color = 'green' |'red' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((x, y) => x - y);

    if (
      [a, b, c].some((x) => x <= 0)
      || sides[0] + sides[1] <= sides[2]
    ) {
      throw new Error('a, b and c must be positive');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number.isInteger(area) ? area : +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be positive');
    }
  }

  getArea(): number {
    const area: number = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be positive');
    }
  }

  getArea(): number {
    const area: number = Math.floor(this.width * this.height * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
