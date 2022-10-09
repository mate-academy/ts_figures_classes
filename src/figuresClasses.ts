type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea?(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Side must be >= 0');
    }

    if (this.sideB + this.sideC <= this.sideA
      || this.sideA + this.sideC <= this.sideB
      || this.sideA + this.sideB <= this.sideC) {
      throw new Error('Invalid');
    }
  }

  getArea(): number {
    const Perimeter2 = (this.sideA + this.sideB + this.sideC) / 2;
    const result = Math.sqrt(
      Perimeter2
      * (Perimeter2 - this.sideA)
      * (Perimeter2 - this.sideB)
      * (Perimeter2 - this.sideC),
    );

    return Math.floor(result * 100) / 100;
  }
}

export class Circle {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be >= 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0) {
      throw new Error('Rectagle sides must be >= 0');
    }
  }

  getArea(): number {
    return Math.round((this.sideA * this.sideB) * 100) / 100;
  }
}

export function getInfo(el):string {
  return `A ${el.color} ${el.shape} - ${el.getArea()}`;
}
