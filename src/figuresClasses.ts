type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  private sides: number[];

  constructor(public color:Color, ...sides:number[]) {
    this.shape = 'triangle';
    this.color = color;

    if (sides[0] + sides[1] <= sides[2]
      || sides[0] + sides[2] <= sides[1]
      || sides[2] + sides[3] <= sides[0]
      || sides[0] === 0
      || sides[1] === 0
      || sides[2] === 0) {
      throw new Error('Invalid sides');
    }

    this.sides = sides;
  }

  getArea(): number {
    const s: number = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;

    return Math.floor(Math.sqrt(s * (s - this.sides[0])
    * (s - this.sides[1]) * (s - this.sides[2])) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  private radius: number;

  constructor(public color:Color, radius:number) {
    this.shape = 'circle';
    this.color = color;

    if (radius <= 0) {
      throw new Error('Invalid radius');
    }

    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  private sides: number[];

  constructor(public color:Color, ...sides:number[]) {
    this.shape = 'rectangle';
    this.color = color;

    if (sides[0] <= 0 || sides[1] <= 0) {
      throw new Error('Invalid sides');
    }

    this.sides = sides;
  }

  getArea(): number {
    return +(this.sides[0] * this.sides[1]).toFixed(2);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
