export type Color = 'red' | 'green' | 'blue';

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

function checkSides(errorMessage: string, ...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkSides('Triangle sides must be greater than 0', a, b, c);

    if (a >= c + b || b >= a + c || c >= b + a) {
      throw new Error('Triangle sides must be greater than 0');
    }
  }

  getArea(): number {
    const q = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(q * (q - this.a) * (q - this.b) * (q - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkSides('Radius must be greater than 0', radius);
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkSides('Width and height must be greater than 0', width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
