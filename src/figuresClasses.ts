type Color = 'red' | 'blue' | 'green';

enum Shape {
  triangle = 'triangle',
  rectangle = 'rectangle',
  circle = 'circle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = Shape.triangle,
  ) {
    if (!a || !b || !c || a <= 0 || b <= 0 || c <= 0 || c >= a + b) {
      throw new Error('Please, enter valid data');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = s * (s - this.a) * (s - this.b) * (s - this.c);

    return Math.trunc(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = Shape.circle,
  ) {
    if (!radius || radius <= 0) {
      throw new Error('Please, enter valid data');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = Shape.rectangle,
  ) {
    if (!width || !height || width <= 0 || height <= 0) {
      throw new Error('Please, enter valid data');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
