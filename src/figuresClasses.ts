export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;

  shape: string;

  a: number;

  b: number;

  c: number;

  constructor(
    color: string,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    // I called semi perimeter as 'sp' to reduce the length of the line
    const sp = (this.a + this.b + this.c) / 2;

    const square = Math.sqrt(
      sp * (sp - this.a) * (sp - this.b) * (sp - this.c),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle {
  color: string;

  shape: string;

  radius: number;

  constructor(
    color: string,
    radius: number,
  ) {
    this.shape = 'circle';
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square = Math.PI * (this.radius ** 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  color: string;

  shape: string;

  width: number;

  height: number;

  constructor(
    color: string,
    width: number,
    height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square = this.height * this.width;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
