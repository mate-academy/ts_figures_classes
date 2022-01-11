export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

interface TriangleSides {
  a: number;
  b: number;
  c: number;
}

interface CircleRadius {
  radius: number;
}

interface RectangleeSides {
  width: number;
  height: number;
}

export class Triangle implements Figure, TriangleSides {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be a positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = 1 / 2 * (this.a + this.b + this.c);
    const areaTriangle = Math.floor(Math.sqrt(
      semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b)
    * (semiPerimeter - this.c),
    ) * 100) / 100;

    return areaTriangle;
  }
}

export class Circle implements Figure, CircleRadius {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Radius should be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure, RectangleeSides {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('Both sides should be a positive numbers');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
