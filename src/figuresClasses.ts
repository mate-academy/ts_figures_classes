type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public shape: Shapes,
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid Data');
    }

    if (!(a < b + c && a + c && c < a + b)) {
      throw new Error('This is not a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public shape: Shapes,
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid Data');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius * this.radius;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public shape: Shapes,
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid Data');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea}`;
}
