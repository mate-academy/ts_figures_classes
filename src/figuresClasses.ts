enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function,
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const data = [a, b, c].sort((prev, next) => next - prev);

    if (a <= 0 || b <= 0 || c <= 0 || data[0] >= data[1] + data[2]) {
      throw new Error('Please check data, because data'
        + 'is not correct or it is not triangle');
    }
  }

  shape = Shape.triangle;

  getArea(): number {
    const p: number = (this.a + this.b + this.c) * 0.5;

    const s:number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +s.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius : number,
  ) {
    if (radius <= 0) {
      throw new Error('ERROR - Please write correct radius');
    }
  }

  shape = Shape.circle;

  getArea(): number {
    const s = this.radius ** 2 * Math.PI;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('ERROR - Please write correct data');
    }
  }

  shape = Shape.rectangle;

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
