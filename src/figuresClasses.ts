enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
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
    public shape = Shape.Triangle,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of your sides is <= 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('This is not a triangle');
    }
  }

  getArea(): number {
    // used Heron's formula
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  constructor(
    public color: Color,
    public radius: number,
    public shape = Shape.Circle,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape = Shape.Rectangle,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One of your sides is <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
