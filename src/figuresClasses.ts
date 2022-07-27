enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The sides of a triangle can not be <= 0');
    }

    if (this.c >= this.a + this.b) {
      throw new Error('The sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const sP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(sP * (sP - this.a) * (sP - this.b) * (sP - this.c));

    return Math.floor(100 * area) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('The radius of a circle can not be <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(100 * area) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The sides of a rectangle can not be <= 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(100 * area) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
