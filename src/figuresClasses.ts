export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

function round(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a < 1 || b < 1 || c < 1) {
      throw new Error('triangle side should be a positive number');
    }

    if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
      throw new Error('not a real triangle');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c)));
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius < 1) {
      throw new Error('radius should be a positive number');
    }
  }

  getArea(): number {
    return round(Math.PI * (this.radius **= 2));
  }
}

export class Rectangle {
  shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width < 1 || height < 1) {
      throw new Error('width and height should be positive numbers');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
