type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;

function roundDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  heigth: number;

  constructor(color: Color, width: number, heigth: number) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.heigth = heigth;
  }

  getArea(): number {
    return roundDownToHundredths(this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
