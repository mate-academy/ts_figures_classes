type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (Math.max(a, b, c) >= [a, b, c]
      .filter((side) => side !== Math.max(a, b, c))
      .reduce((z, y) => z + y)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('some sides lower or equal to 0');
    }
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c)) * 100) / 100;
  }
}

export class Circle {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('radius lower or equal to 0');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('some sides lower or equal to 0');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  switch (figure.shape) {
    case 'triangle': {
      return `A ${figure.color} triangle - ${figure.getArea()}`;
    }

    case 'circle': {
      return `A ${figure.color} circle - ${figure.getArea()}`;
    }

    case 'rectangle': {
      return `A ${figure.color} rectangle - ${figure.getArea()}`;
    }

    default: {
      return 'not a figure';
    }
  }
}
