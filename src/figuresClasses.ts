
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function round(x: number): number {
  return Math.floor(x * 100) / 100;
}

export interface Figure {
  shape: Shape
  color: Color
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be positive');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error('Can not build a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length should be more than 0');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius * this.radius);
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
      throw new Error('Sides length should be more than 0');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
