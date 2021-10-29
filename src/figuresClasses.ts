type KindFigure = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: KindFigure;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: KindFigure = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a === 0 || b === 0 || c === 0
    || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) * 0.5;

    return Math.floor(Math.sqrt(semiPerimeter
     * (semiPerimeter - this.a)
     * (semiPerimeter - this.b)
     * (semiPerimeter - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: KindFigure = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: KindFigure = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
