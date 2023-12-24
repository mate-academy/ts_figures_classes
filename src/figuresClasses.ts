export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  s: number;

  getArea(): number;
}

export function cutSquare(square: number): number {
  return Math.trunc(square * 100) / 100;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public s: number = 0,
  ) {
    if (this.isValidTriangle()) {
      const semiperimeter = (a + b + c) / 2;
      const square = Math.sqrt(
        semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
      );

      this.s = cutSquare(square);
    } else {
      throw new Error('error');
    }
  }

  private isValidTriangle(): boolean {
    if (this.a > 0 && this.b > 0 && this.c > 0) {
      const allSide = [this.a, this.b, this.c].sort((x, y) => y - x);

      return allSide[0] < allSide[1] + allSide[2];
    }

    return false;
  }

  getArea(): number {
    return this.s;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public circleRadius: number,
    public s: number = 0,

  ) {
    if (this.circleRadius > 0) {
      const square = Math.PI * (this.circleRadius ** 2);

      this.s = cutSquare(square);
    } else {
      throw new Error('error');
    }
  }

  getArea(): number {
    return this.s;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public s: number = 0,
  ) {
    if (this.a > 0 && this.b > 0) {
      this.s = this.a * this.b;
    } else {
      throw new Error('error');
    }
  }

  getArea(): number {
    return this.s;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.s}`;
}
