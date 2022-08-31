type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be a positive numbers');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('3 side should be greater than sum of 2 other sides');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const square: number
      = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Number(square.toFixed(2));
  }
}

export class Circle {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be a positive number');
    }
  }

  getArea(): number {
    const square: number = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Rectangle sides should be a positive numbers');
    }
  }

  getArea(): number {
    const square: number = this.a * this.b;

    return Number(square.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
