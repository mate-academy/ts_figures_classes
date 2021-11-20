type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The lenght of the side cannot be negative');
    }

    if (a + b <= c || c + b <= a || c + a <= b) {
      throw new Error('Such triangle doesnot exist');
    }
  }

  getArea(): number {
    const semiperimeter: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius < 0) {
      throw new Error('Radius cannot be negative');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
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
      throw new Error('The lenght of the side cannot be negative');
    }
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
