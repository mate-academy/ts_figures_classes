type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: Color;

  a = 0;

  b = 0;

  c = 0;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides need to be bigger than 0');
    }

    const maior: number = Math.max(this.a, this.b, this.c);
    const somaOutros: number = this.a + this.b + this.c - maior;

    if (maior >= somaOutros) {
      throw new Error(
        `The longest side cannot be greater than or equal to the sum of the other two sides`,
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
  shape: 'circle';

  color: Color;

  radius = 0;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('The radius needs to be bigger than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: Color;

  width = 0;

  height = 0;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height need to be bigger than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case 'triangle':
      return `A ${figure.color} triangle - ${figure.getArea()}`;

    case 'circle':
      return `A ${figure.color} circle - ${figure.getArea()}`;

    case 'rectangle':
      return `A ${figure.color} rectangle - ${figure.getArea()}`;

    default:
      throw new Error('Shape not recognized');
  }
}
