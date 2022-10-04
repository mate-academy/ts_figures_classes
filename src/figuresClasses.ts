type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: string;
  a: number;
  b?: number;
  c?: number;
  getArea() : number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('All sides should be > 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw Error('The longes side should be < then the sum of two others!');
    }
  }

  getArea(): number {
    const perimetr: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(perimetr
      * (perimetr - this.a)
      * (perimetr - this.b)
      * (perimetr - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: string,
    public a: number,
  ) {
    if (a <= 0) {
      throw Error('Radius should be > 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.a * this.a;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw Error('All sides should be > 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
