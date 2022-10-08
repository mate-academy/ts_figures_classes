type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: string;
  getArea() : number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('All sides should be > 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw Error('The longes side should be < then the sum of two others!');
    }
  }

  getArea(): number {
    const semiperimetr: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(semiperimetr
      * (semiperimetr - this.a)
      * (semiperimetr - this.b)
      * (semiperimetr - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw Error('Radius should be > 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw Error('All sides should be > 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
