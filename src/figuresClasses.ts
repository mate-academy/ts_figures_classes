type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export type Figure = {
  shape: Shape;
  color: Color;
  side1: number;
  side2?: number;
  side3?: number;

  getArea(): number;
};

export function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (side1 + side2 <= side3
      || side2 + side3 <= side1
      || side3 + side1 <= side2) {
      throw new Error(
        'The longest side must be smaller than sum of two others!',
      );
    }

    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error(
        'Side must be greater than zero!',
      );
    }
  }

  getArea(): number {
    const { side1, side2, side3 } = this;
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  area = 0;

  constructor(
    public color: Color,
    public side1: number,
  ) {
    if (side1 <= 0) {
      throw new Error('side must be geater than zero!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.side1 ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
  ) {
    if (side1 <= 0 || side2 <= 0) {
      throw new Error('side must be geater than zero!');
    }
  }

  getArea():number {
    const { side1, side2 } = this;
    const area = side1 * side2;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
