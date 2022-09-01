enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw new Error('Side can not be 0 or less');
    }

    if (this.side1 >= (this.side2 + this.side3)
    || this.side2 >= (this.side3 + this.side1)
    || this.side3 >= (this.side1 + this.side2)) {
      throw new Error('Sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const halfPer = (this.side1 + this.side2 + this.side3) / 2;

    const perimetr = halfPer * (halfPer - this.side1)
    * (halfPer - this.side2) * (halfPer - this.side3);

    const resultPer: number = Math.sqrt(perimetr);

    return Number(resultPer.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius can not be 0 or less');
    }
  }

  getArea(): number {
    const radiusResult = Math.PI * (this.radius ** 2);

    return Math.floor(radiusResult * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Wrong length');
    }
  }

  getArea(): number {
    const rectanglePerimetr = this.width * this.height;

    return Math.ceil(rectanglePerimetr);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
