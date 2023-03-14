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
    if (a <= 0 || b <= 0 || c <= 0 || c >= a + b) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      s * ((s - this.a) * (s - this.b) * (s - this.c))
    );

    return Math.floor((area * 100) / 100);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
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
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    const square = (this.width * this.height);

    return square;
  }
}

export function getInfo(figure: string): string {
  return `A ${this.Color} ${this.Shape} - ${this.getArea(figure)}`;
}
