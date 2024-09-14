interface Figure {
  getArea(): number;
  getInfo(): string;
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  public shape = 'triangle';
  public color: string;

  constructor(
    color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Each side of the triangle must be a positive number greater than 0',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `The provided dimensions ${a}, ${b}, and ${c} do not meet the triangle inequality theorem and can't form a triangle.`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }

  getInfo(): string {
    return `This is a ${this.color} ${this.shape} with an area of ${this.getArea()}`;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  public color: string;

  constructor(
    color: string,
    private radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error(
        'The radius of a circle must be a positive number greater than zero.',
      );
    }
  }

  getArea(): number {
    return Math.round(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }

  getInfo(): string {
    return `This is a ${this.color} ${this.shape} with an area of ${this.getArea()}`;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';
  public color: string;

  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width and height of a rectangle must be positive numbers greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }

  getInfo(): string {
    return `This is a ${this.color} ${this.shape} with an area of ${this.getArea()}`;
  }
}
