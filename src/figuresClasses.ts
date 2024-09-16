type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  getArea(): number;
  shape: ShapeType;
  color: ColorType;
}

function roundingNumber(number: number): number {
  return Math.floor(number * 100) / 100;
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
    let triangleSquare = (this.a + this.b + this.c) / 2;

    triangleSquare = Math.sqrt(
      triangleSquare *
        (triangleSquare - this.a) *
        (triangleSquare - this.b) *
        (triangleSquare - this.c),
    );

    return roundingNumber(triangleSquare);
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

    return roundingNumber(area);
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
    const rectangleSquare = this.height * this.width;

    return roundingNumber(rectangleSquare);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
