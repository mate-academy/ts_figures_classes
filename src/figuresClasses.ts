type Color = 'red'|'green'|'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || ((this.a + this.b) <= this.c)
      || ((this.b + this.c) <= this.a)
      || ((this.a + this.c) <= this.b)
    ) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const a = (s * (s - this.a) * (s - this.b) * (s - this.c));
    const res = Math.sqrt(a);

    return +res.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const result = Math.PI * (this.radius * this.radius);
    const roundedString = Math.floor(result * 100) / 100;

    return roundedString;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const res = this.a * this.b;

    return +res.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}

// const greenCircle = new Circle('green', 6);
// getInfo(greenCircle)
