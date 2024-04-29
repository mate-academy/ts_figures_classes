type Color = 'red' | 'green' | 'blue';

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
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Length of sides should be greater than 0');
    }

    if (
      sideA + sideB <= sideC ||
      sideB + sideC <= sideA ||
      sideA + sideC <= sideB
    ) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const areaTriangle = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return Math.floor(areaTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * this.radius * this.radius;

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be greater than 0');
    }
  }

  getArea(): number {
    const areaRectangle = this.width * this.height;

    return Math.floor(areaRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
