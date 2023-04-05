type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea() : number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const subZero = sides.some((side) => side <= 0);
    const maxSide = Math.max(...sides);
    const sumOfSides = sides.reduce((acc, curr) => acc + curr, 0);

    if (maxSide >= (sumOfSides - maxSide)) {
      throw new Error('the longest side of a triangle is >= than a sum');
    }

    if (subZero) {
      throw new Error('One of your sides is less than 0');
    }
  }

  getArea():number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const square = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return Number(square.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is less or equal 0');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    const sides = [a, b];
    const subZero = sides.some((side) => side <= 0);

    if (subZero) {
      throw new Error('One of your sides is less than 0');
    }
  }

  getArea(): number {
    return Number((this.a * this.b).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
