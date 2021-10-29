type Form = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Form;
  color: Color;

  getArea():number;
}

export class Triangle implements Figure {
  shape:Form = 'triangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Hold your horses cowboy');
    }

    if (a + b <= c || a + c <= b
        || b + c <= a) {
      throw new Error('You cannot build a triangle with this sides');
    }
  }

  getArea():number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(perimeter * ((perimeter - this.a)
      * (perimeter - this.b) * (perimeter - this.c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Form = 'circle';

  constructor(
    public color:Color,
    public a:number,
  ) {
    if (a <= 0) {
      throw new Error('Radius needs to be a positive integer');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * (this.a ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Form = 'rectangle';

  constructor(
    public color:Color,
    public a:number,
    public b:number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('You cannot form a rectangle with negative values');
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
