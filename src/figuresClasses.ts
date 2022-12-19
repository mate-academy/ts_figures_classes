type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || b + c <= a
      || a + c <= b
    ) {
      throw new Error('side of triangle is wrong');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = 0.5 * (a + b + c);

    return Number((Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2));
  }
}

export class Circle {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('your radius is incorrect');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor((Math.PI * radius * radius) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('your width or height is incorrect');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
