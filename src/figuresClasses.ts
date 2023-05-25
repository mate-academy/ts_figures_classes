type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color
  shape: Shape
  getArea: () => number
}

const transformArea = (area: number): number => {
  return Number.isInteger(area) ? area
    : Number(area.toFixed(2));
};

export class Triangle implements Figure {
  shape: Shape;

  constructor(public color: Color, public sideA: number,
    public sideB: number, public sideC: number) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0
      || sideA >= (sideB + sideC)
      || sideB >= (sideA + sideC)
      || sideC >= (sideB + sideA)
    ) {
      throw new Error('Cannot create triangle with these sides');
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return transformArea(Math.sqrt(
      semiPerimeter * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC),
    ));
  }
}

export class Circle implements Figure {
  radius: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Cannot create circle with negative radius');
    }
    this.radius = radius;
    this.color = color;
    this.shape = 'circle';
  }

  getArea(): number {
    return transformArea(Math.floor(((Math.PI * (this.radius ** 2)
      * 100))) / 100);
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  color: Color;

  shape: Shape;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Cannot create rectangle with these sides');
    }
    this.width = width;
    this.height = height;
    this.color = color;
    this.shape = 'rectangle';
  }

  getArea(): number {
    return transformArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
