type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('num must be > 0');
    } else if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('sum 2 sides must be > 3 side');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    return Math.trunc((perimeter * (perimeter - this.a)
    * (perimeter - this.b) * (perimeter - this.c)) ** 0.5 * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('number must be > 0');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Color,
    public width:number,
    public height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('number must be > 0');
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
