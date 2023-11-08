type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (color.length === 0) {
      throw new Error('Please enter a color.');
    }

    if (Math.max(a, b, c) >= Math.min(a, b, c)
      + (a + b + c - Math.max(a, b, c) - Math.min(a, b, c))) {
      throw new Error("Sides 1, 2 and 3 can't form a triangle");
    }

    if (a <= 0 && b <= 0 && c <= 0) {
      throw new Error('Please enter a side.');
    }
  }

  getArea(): number {
    const halfP: number = 1 / 2 * (this.a + this.b + this.c);
    const area = Math.sqrt(halfP
      * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (color.length === 0) {
      throw new Error('Please enter a color.');
    }

    if (r <= 0) {
      throw new Error('Please enter a radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.r * this.r;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (color.length === 0) {
      throw new Error('Please enter a color.');
    }

    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    } else {
      throw new Error('Please enter a side');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
