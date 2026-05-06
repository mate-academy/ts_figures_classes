enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || c + b <= a || a + c <= b) {
      throw new Error('Triangle error');
    }
  }

  get shape(): Shape {
    return Shape.Triangle;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100 + 0.01) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle error');
    }
  }

  get shape(): Shape {
    return Shape.Circle;
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100 + 0.01) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle error');
    }
  }

  get shape(): Shape {
    return Shape.Rectangle;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100 + 0.01) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
