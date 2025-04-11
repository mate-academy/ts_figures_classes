// type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  // shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';
  // shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        "Triangle's sides do not satisfy the triangle inequality theorem",
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  // shape: Shape = 'circle';
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error("Circle's radius must be greater than 0");
    }
  }

  getArea(): number {
    // return 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  // shape: Shape = 'rectangle';
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error("Rectangle's width and height must be greater than 0");
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // ${figure['shape']}
  // eslint-disable-next-line @typescript-eslint/dot-notation
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
