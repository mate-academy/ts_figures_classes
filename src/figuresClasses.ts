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
    if (a === 0 || b === 0 || c === 0 || a >= b + c
      || b >= a + c || c >= a + b) {
      throw new Error();
    }
  }

  getArea(): number {
    const semiPerimetr = 0.5 * (this.a + this.b + this.c);

    return Math.floor(((semiPerimetr * (semiPerimetr - this.a)
        * (semiPerimetr - this.b)
    * (semiPerimetr - this.c)) ** 0.5) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(

    public color: Color,

    public radius: number,

  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea():number {
    return Math.floor(((Math.PI * this.radius * this.radius)) * 100) / 100;
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
      throw new Error();
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
