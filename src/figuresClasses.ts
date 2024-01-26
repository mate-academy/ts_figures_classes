type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  color: ColorType;

  constructor(
    color: ColorType,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error('Side should be greater than 0 !');
    }

    const isTriangleValid = side1 + side2 > side3
    && side1 + side3 > side2
    && side2 + side3 > side1;

    if (!isTriangleValid) {
      throw new Error('Invalid triangle sides');
    }

    this.color = color;
  }

  getArea(): number {
    const semiPerimetr = (this.side1 + this.side2 + this.side3) / 2;
    const area = Math.sqrt(
      semiPerimetr
      * (semiPerimetr - this.side1)
      * (semiPerimetr - this.side2) * (semiPerimetr - this.side3),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  color: ColorType;

  constructor(
    color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0 :)');
    }

    this.color = color;
  }

  getArea(): number {
    // const area = Math.PI * (this.radius * this.radius);

    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  color: ColorType;

  constructor(
    color: ColorType,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Side should be greater than 0 :))');
    }

    this.color = color;
  }

  getArea(): number {
    const area = this.sideA * this.sideB;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
