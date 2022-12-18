type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return +Math.sqrt(Math.abs(semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC))).toFixed(2);
  }

  isInvalidShape(): boolean {
    const arr = [this.sideA, this.sideB, this.sideC];

    const maxSide = arr.sort((a, b) => a - b).pop();
    const twoSideSum = arr.reduce((sum, current) => sum + current);
    const isInvalidValue = arr.some((side) => side <= 0);

    if (!maxSide) {
      return false;
    }

    return (maxSide >= twoSideSum) || isInvalidValue;
  }

  constructor(
    public color: Colors,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    this.shape = 'triangle';

    if (this.isInvalidShape()) {
      throw new Error('Invalid triangle');
    }
  }
}

export class Circle implements Figure {
  shape: Shapes;

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Invalid circle');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
