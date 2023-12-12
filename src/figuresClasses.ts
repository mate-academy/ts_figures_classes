type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

type ShapeOrColor = Shape | Color;

export interface Figure {
  shapeOrColor: ShapeOrColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeOrColor = 'triangle';

  constructor(
    public color: ShapeOrColor,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Side lengths must be greater than 0.');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB
    ) {
      throw new Error('Not a triangle');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(s * (s - this.sideA)
      * (s - this.sideB) * (s - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeOrColor = 'circle';

  constructor(
    public color: ShapeOrColor,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeOrColor = 'rectangle';

  constructor(
    public color: ShapeOrColor,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
