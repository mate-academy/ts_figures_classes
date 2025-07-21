type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function formNum(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(this.a, this.b, this.c);
    const min = Math.min(this.a, this.b, this.c);
    const sum = this.a + this.b + this.c;

    if (min <= 0 || sum - max <= max) {
      throw new Error('Invalid value entered');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return formNum(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid value entered');
    }
  }

  getArea(): number {
    return formNum(Math.PI * (this.radius * this.radius));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Invalid value entered');
    }
  }

  getArea(): number {
    return formNum(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
