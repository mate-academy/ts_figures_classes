type Color = 'red' | 'green' | 'blue';

enum Shapes {
  Tringle = 'triangle',
  Circle = 'circle',
  Reactangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.Tringle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('Tringle Sides Length must be greater then ZERO');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('the longest side is greater than other two sides sum');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const sideA = semiPerimeter - this.a;
    const sideB = semiPerimeter - this.b;
    const sideC = semiPerimeter - this.c;
    const productOfAllSides = sideA * sideB * sideC;

    const area = Math.sqrt(semiPerimeter * productOfAllSides);

    return Math.floor((area) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater then ZERO');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Reactangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Reactangle sides must be greater then ZERO');
    }
  }

  getArea(): number {
    return +Math.floor(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
