type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  a: number;

  b: number;

  c: number;

  constructor(public color: Colors, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    this.isTriangle();
  }

  getArea(): number {
    const semiPerim = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiPerim
      * (semiPerim - this.a) * (semiPerim - this.b) * (semiPerim - this.c),
    );

    return +area.toFixed(2);
  }

  isTriangle(): void {
    if ((this.a === 0 || this.b === 0 || this.c === 0)) {
      throw new Error('Some side is equal to zero');
    }

    const sides = [this.a, this.b, this.c];
    const biggestSide = Math.max(...sides);
    let sum = 0;

    sides.forEach((side) => {
      if (side !== biggestSide) {
        sum += side;
      }
    });

    if (biggestSide >= sum) {
      throw new Error('Is not a triangle');
    }
  }
}

export class Circle implements Figure {
  shape: Shapes;

  constructor(public color: Colors, public radius: number) {
    this.shape = 'circle';
    this.radius = radius;

    if (this.radius < 0) {
      throw new Error('Radius is negative');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  width: number;

  height: number;

  constructor(public color: Colors, width: number, height: number) {
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;

    if (width < 0 || height < 0) {
      throw new Error('Some side is negative');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
