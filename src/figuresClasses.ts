enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Please enter valid positive numbers');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.c + this.b <= this.a) {
      throw new Error('This sides can\'t form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = s * (s - this.a) * (s - this.b) * (s - this.c);

    return Math.floor(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('Please enter valid positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Please enter valid positive numbers');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
