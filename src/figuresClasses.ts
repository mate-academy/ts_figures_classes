type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color

  getArea(): number
}

function roundDown2(area: number): number {
  return Math.floor(100 * area) / 100;
}

function handleLengthNotPositive(): void {
  throw new Error('Length is not positive!');
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      handleLengthNotPositive();
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sided ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDown2(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public r: number,
  ) {
    this.shape = 'circle';

    if (r <= 0) {
      handleLengthNotPositive();
    }
  }

  getArea(): number {
    return roundDown2(this.r * this.r * Math.PI);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      handleLengthNotPositive();
    }
  }

  getArea(): number {
    return roundDown2(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
