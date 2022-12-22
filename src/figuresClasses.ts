export enum Shape {
  Triangle = 'triangle',
  Circle= 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  getArea: () => number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the sides is less or equal 0!');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('It\'s not a triangle');
    }

    this.getArea = (): number => {
      const semiPerimeter = (this.a + this.b + this.c) / 2;

      return Math.round(Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c)) * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  getArea = (): number => Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is less or equal 0!');
    }
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  getArea = (): number => Math.floor(this.width * this.height * 100) / 100;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One of the sides is less or equal 0!');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
