export enum ColorType {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: ColorType,
    private a: number,
    private b: number,
    private c: number,
    public shape: ShapeType = ShapeType.Triangle,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: ColorType,
    private radius: number,
    public shape: ShapeType = ShapeType.Circle,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: ColorType,
    private width: number,
    private height: number,
    public shape: ShapeType = ShapeType.Rectangle,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
