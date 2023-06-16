type TypeOfFigure = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: TypeOfFigure,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: TypeOfFigure = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('A triangle with such sides does not exist');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const square: number = Math.sqrt(s
      * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: TypeOfFigure ='circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    const square: number = Math.PI * (this.radius ** 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: TypeOfFigure = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and length must be positive');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
