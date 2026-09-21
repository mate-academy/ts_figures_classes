export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('triangle sides should be positive!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'the longest side should not be greater than the other two sides!',
      );
    }
  }

  getArea = (): number => {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    // Apply Heron's formula: A = √(s(s-a)(s-b)(s-c))
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('circle radius should be positive!');
    }
  }

  getArea = (): number =>
    Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('rectangle sides should be positive!');
    }
  }

  getArea = (): number => Math.floor(this.width * this.height * 100) / 100;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
