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
    if (a <= 0) {
      throw new Error('Triangle side a must be greater than 0');
    }

    if (b <= 0) {
      throw new Error('Triangle side b must be greater than 0');
    }

    if (c <= 0) {
      throw new Error('Triangle side c must be greater than 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Triangle sides do not satisfy the triangle inequality');
    }
  }

  get shape(): Shape {
    return Shape.Triangle;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
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
    if (width <= 0) {
      throw new Error('Rectangle width must be greater than 0');
    }

    if (height <= 0) {
      throw new Error('Rectangle height must be greater than 0');
    }
  }

  get shape(): Shape {
    return Shape.Rectangle;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
