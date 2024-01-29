enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  color: Color;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(public color: string, public sideA: number,
    public sideB: number, public sideC: number) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw Error('All sides must be greater then 0');
    }

    const sides = [sideA, sideB, sideC].sort((a, b) => a - b);

    if (sides[0] + sides[1] <= sides[2]) {
      throw Error('Invalid triangle sides');
    }

    this.color = color;

    this.sideA = sideA;

    this.sideB = sideB;

    this.sideC = sideC;
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.round(
      Math.sqrt(s * (s - this.sideA) * (s - this.sideB)
        * (s - this.sideC)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  color: Color;

  radius: number;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw Error('Radius must be greater then 0');
    }

    this.color = color;

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw Error('Width and height must be greater than 0');
    }

    this.color = color;

    this.height = height;

    this.width = width;
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
