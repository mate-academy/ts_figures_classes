export interface Figure {
  readonly shape: 'triangle' | 'circle' | 'rectangle';
  readonly color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('you are invalid! try again');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const abc = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    const finalABC = Math.floor(abc * 100) / 100;

    return finalABC;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('you are invalid! try again');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius * this.radius;
    const finalS = Math.floor(s * 100) / 100;

    return finalS;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('you are invalid! try again');
    }
  }

  getArea(): number {
    const s = this.width * this.height;
    const finalS = Math.floor(s * 100) / 100;

    return finalS;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
