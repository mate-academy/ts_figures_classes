type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color: Color;

  private pointA: number;

  private pointB: number;

  private pointC: number;

  constructor(color: Color, pointA: number, pointB: number, pointC: number) {
    if (
      pointA >= pointB + pointC ||
      pointB >= pointA + pointC ||
      pointC >= pointB + pointA
    ) {
      throw new Error('all sides should be shorter than the sum of others');
    }
    this.color = color;
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
  }

  getArea(): number {
    const halfP = (this.pointA + this.pointB + this.pointC) / 2;
    const area = Math.sqrt(
      halfP *
        (halfP - this.pointA) *
        (halfP - this.pointB) *
        (halfP - this.pointC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public color: Color;

  private radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('radius must be a bigger than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public color: Color;

  private width: number;

  private height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('rectangle`s sides length must be bigger than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
