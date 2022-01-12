enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || this.isTriangle()) {
      throw new Error('Can\'t create triangle, invalid side parameter');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }

  isTriangle(): boolean {
    return this.a >= (this.b + this.c)
      || this.b >= (this.a + this.c)
      || this.c >= (this.a + this.b);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is invalid');
    }
  }

  getArea(): number {
    return Math.floor(((this.radius ** 2) * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid width or height parameter');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
