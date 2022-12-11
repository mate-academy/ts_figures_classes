
type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

function floorCorrectly(number: number): number {
  return Math.floor((number + Number.EPSILON) * 100) / 100;
}
export interface Figure {
  shape: Shape
  color: Color
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
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

    return floorCorrectly(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,

  ) {
    if (arguments.length <= 0) {
      throw new Error('argument(s) missing');
    }

    if (this.radius <= 0) {
      throw new Error('Radius is not positive');
    }
  }

  getArea(): number {
    return floorCorrectly(Math.PI * (this.radius * this.radius));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,

  ) {
    if (arguments.length <= 0) {
      throw new Error('argument(s) missing');
    }

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Height or Width is not positive');
    }
  }

  getArea(): number {
    return floorCorrectly(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
