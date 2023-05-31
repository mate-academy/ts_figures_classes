type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Triangle side can not be less than 1');
    }

    if (
      sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB
    ) {
      throw new Error('The entered values cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) * 0.5;

    return Math.floor(Math.sqrt(s * (s - this.sideA)
    * (s - this.sideB) * (s - this.sideC)) * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius can not be less than 1');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle side can not be less than 1');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
