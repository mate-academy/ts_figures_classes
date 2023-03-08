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
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle {
  shape = Shape.Triangle;

  constructor(

    public color: Color,

    public a: number,

    public b: number,

    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should have a length greater than 0');
    }

    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,

    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should have a length greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,

    public width: number,

    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Both sides should have a length greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
