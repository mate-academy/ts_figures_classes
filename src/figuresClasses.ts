type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function round(value: number): number {
  return (Math.floor(value * 100) / 100);
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a === 0 || b === 0 || c === 0 || a >= b + c
      || b >= a + c || c >= a + b) {
      throw new Error('This is not a triangle');
    }
  }

  getArea(): number {
    const semiPerimetr = 0.5 * (this.a + this.b + this.c);
    const triangleArea = (semiPerimetr * (semiPerimetr - this.a)
    * (semiPerimetr - this.b)
* (semiPerimetr - this.c)) ** 0.5;

    return round(triangleArea);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,

  ) {
    if (radius <= 0) {
      throw new Error('This is not a circle');
    }
  }

  getArea():number {
    const circleArea = Math.PI * this.radius * this.radius;

    return round(circleArea);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(

    public color: Color,

    public a: number,

    public b: number,

  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('This is not a rectangle');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
