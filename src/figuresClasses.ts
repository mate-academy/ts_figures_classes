type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
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
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
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
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
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
