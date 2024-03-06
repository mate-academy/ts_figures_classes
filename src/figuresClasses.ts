type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  getArea(): number;
  shape: ShapeType;
  color: ColorType;
}

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  let area;

  if (Number.isInteger(figure.getArea())) {
    area = figure.getArea();
  } else {
    area = figure.getArea().toFixed(2);
  }

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
