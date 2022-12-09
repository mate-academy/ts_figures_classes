export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle'
  color: 'red' | 'green' | 'blue'
  getArea(): number
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color,
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
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color,
    public radius: number,

  ) {
    if (arguments.length <= 0) {
      throw new Error('argument(s) missing');
    }
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color,
    public width: number,
    public height: number,

  ) {
    if (arguments.length <= 0) {
      throw new Error('argument(s) missing');
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getInfo(figure): string {

}
