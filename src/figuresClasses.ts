type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Length of sides must be greater than 0');
    }

    const longestSide = Math.max(sideA, sideB, sideC);
    const sumOfSide = sideA + sideB + sideC - longestSide;

    if (longestSide >= sumOfSide) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const sumTriangles = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor((Math.sqrt(
      sumTriangles * (sumTriangles - this.sideA) * (sumTriangles - this.sideB)
      * (sumTriangles - this.sideC),
    )) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(public color: Colors, private radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
