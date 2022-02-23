type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const toCheck = (a: number, b: number, c: number): boolean => {
  const arr = [a, b, c].sort((x, y) => x - y);

  return arr[2] < arr[1] + arr[0];
};

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || !toCheck(a, b, c)) {
      throw new Error('incorrect data');
    }
  }

  getArea(): number {
    const p = +(0.5 * (this.a + this.b + this.c)).toFixed(2);
    const s
      = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(2);

    return s;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('incorrect data');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('incorrect data');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
