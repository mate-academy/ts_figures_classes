type Colors = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  color: Colors;

  constructor(
    public paint: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arrayOfSides = [a, b, c].sort((x, y) => y - x);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sidis length below zero');
    }

    if (arrayOfSides[0] >= (arrayOfSides[1] + arrayOfSides[2])) {
      throw new Error('wrong length of sides');
    }

    this.color = paint;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  color: Colors;

  radius: number;

  constructor(
    public paint: Colors,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('sidis length below zero');
    }

    this.color = paint;
    this.radius = r;
  }

  getArea(): number {
    return Math.floor(((this.radius ** 2) * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  color: Colors;

  width: number;

  height: number;

  constructor(
    public paint: Colors,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('sidis length below zero');
    }

    this.color = paint;
    this.width = a;
    this.height = b;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
