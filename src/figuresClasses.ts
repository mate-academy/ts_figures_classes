export interface Figure {
  getArea(): number;
}
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export class Triangle implements Figure {
  color: Color;

  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Side a (${a}), b (${b}), or c (${c}) must be greater than 0`,
      );
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    const [side1, side2, longest] = sides;

    if (longest >= side1 + side2) {
      throw new Error(
        `Triangle inequality violated: the longest side (c = ${longest}) is greater than or equal to the sum of the other two sides (a = ${side1}, b = ${side2})`,
      );
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  radius: number;

  shape: Shape = 'circle';

  color: Color;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0, got ${radius}`);
    }
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  color: Color;

  shape: Shape = 'rectangle';

  constructor(color: Color, width: number, height: number) {
    if (width <= 0) {
      throw new Error(`Width must be greater than 0, got ${width}`);
    }

    if (height <= 0) {
      throw new Error(`Height must be greater than 0, got ${height}`);
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(
  figure: Figure & { shape: Shape; color: Color },
): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
