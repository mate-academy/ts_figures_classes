type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundUpHundreds(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a < 0 || b < 0 || c < 0) {
      throw new Error('Error');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[sides.length - 1]
      >= sides[sides.length - 2] + sides[sides.length - 3]) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt((s * ((s - this.a) * (s - this.b) * (s - this.c))));

    return roundUpHundreds(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,

  ) {
    if (radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundUpHundreds(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,

  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundUpHundreds(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
