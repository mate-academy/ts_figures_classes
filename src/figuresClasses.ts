enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}
enum Colors {
  red = 'red',
  blue = 'blue',
  green = 'green',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes.triangle = Shapes.triangle;

  color: Colors;

  a: number;

  b: number;

  c: number;

  constructor(color: Colors, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of a triangle must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('It is not a triangle');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shapes.circle = Shapes.circle;

  color: Colors;

  radius: number;

  constructor(color: Colors, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes.rectangle = Shapes.rectangle;

  color: Colors;

  width: number;

  height: number;

  constructor(color: Colors, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides of a rectangle must be greater than 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
