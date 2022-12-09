
// eslint-disable-next-line @typescript-eslint/naming-convention
type color = 'red' | 'green' | 'blue';
// eslint-disable-next-line @typescript-eslint/naming-convention
type shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: shape
  color: color
  getArea(): number
}

export class Triangle implements Figure {
  shape: shape = 'triangle';

  constructor(
    public color: color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    if (arguments.length <= 0) {
      throw new Error('argument(s) missing');
    }

    if ((a + b + c) - 2 * Math.max(a, b, c) <= 0) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: shape = 'circle';

  constructor(
    public color: color,
    public radius: number,

  ) {
    if (arguments.length <= 0) {
      throw new Error('argument(s) missing');
    }
  }

  getArea(): number {
    return Math.PI * (2 ** this.radius);
  }
}

export class Rectangle implements Figure {
  shape: shape = 'rectangle';

  constructor(
    public color: color,
    public width: number,
    public height: number,

  ) {
    if (arguments.length <= 0) {
      throw new Error('argument(s) missing');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getInfo(figure: Figure): string {
  return `${figure}`;
}
