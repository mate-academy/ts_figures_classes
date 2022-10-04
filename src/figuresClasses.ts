type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundArea(area: number): number {
  return (Math.trunc(area * 100) / 100);
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a + b <= c || b + c <= a || c + a <= b) {
      throw Error('Triangle does not exist');
    }

    if (a < 0 || b < 0 || c < 0) {
      throw Error('Input data is not valid');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundArea(s);
  }
}

export class Circle {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius < 0) {
      throw Error('Input data is not valid');
    }
  }

  getArea(): number {
    const s = Math.PI * (this.radius ** 2);

    return roundArea(s);
  }
}

export class Rectangle {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public shape: Shape = 'rectangle',
  ) {
    if (a < 0 || b < 0) {
      throw Error('Input data is not valid');
    }
  }

  getArea(): number {
    const s = this.a * this.b;

    return roundArea(s);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
