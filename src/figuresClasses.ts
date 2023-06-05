type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape,
  ) {
    this.shape = 'triangle';

    let maxSide = 0;
    const sides = [this.a, this.b, this.c];

    sides.forEach((side: number): void => {
      if (side <= 0) {
        throw new Error('Sides have to get be more then 0');
      }

      if (side > maxSide) {
        maxSide = side;
      }
    });

    sides.splice(sides.indexOf(maxSide), 1);

    if (maxSide >= sides.reduce((sum, n) => sum + n, 0)) {
      throw new Error('Lengths sides do not fit');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const ArgA = semiP - this.a;
    const ArgB = semiP - this.b;
    const ArgC = semiP - this.c;
    const square = Math.sqrt(semiP * ArgA * ArgB * ArgC);

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Radius have to get be more then 0');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides have to get be more then 0');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
