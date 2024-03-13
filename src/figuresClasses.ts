export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export type Shapes = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} cannot form a triangle.`);
    }
  }

  getArea = (): number => {
    const sqr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      sqr * (sqr - this.a) * (sqr - this.b) * (sqr - this.c),
    );

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius ${radius} cannot form a circle.`);
    }
  }

  getArea = (): number => {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Sides ${width} and ${height} cannot form a rectangle.`);
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
