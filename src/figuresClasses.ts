type Shape ='triangle'| 'circle' | 'rectangle';
type Color = 'red'|'green'|'blue';
export interface Figure {
  shape:Shape;
  color:Color;
  getArea(): number;
  a?:number;
  b?:number;
  c?:number;
  radius?:number;
}

export class Triangle implements Figure {
  shape:Shape;

  constructor(
    public color:Color,
    public a :number,
    public b: number,
    public c:number,

  ) {
    this.shape = 'triangle';

    if ((a >= b + c)
    || (b >= a + c)
    || (c >= b + a)
    || (c <= 0 || a <= 0 || b <= 0)) {
      throw new Error('Error');
    }
  }

  getArea():number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape:Shape;

  constructor(

    public color:Color,
    public radius:number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea():number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape:Shape;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('Error');
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
