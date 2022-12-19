type Colors = 'red' | 'green' | 'blue';

enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}
export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return +Math.sqrt(semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC)).toFixed(2);
  }

  private hasInvalidShape(): boolean {
    const sides = [this.sideA, this.sideB, this.sideC];

    const maxSide = sides.sort((a, b) => a - b).pop();
    const twoSideSum = sides.reduce((sum, current) => sum + current);
    const hasInvalidValue = sides.some((side) => side <= 0);

    if (!maxSide) {
      return false;
    }

    return (maxSide >= twoSideSum) || hasInvalidValue;
  }

  constructor(
    public color: Colors,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    this.shape = Shapes.triangle;

    if (this.hasInvalidShape()) {
      throw new Error(
        'It`s not possible to create a triangle with these parameters',
      );
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
    this.shape = Shapes.circle;

    if (radius <= 0) {
      throw new Error(
        'It`s not possible to create a circle with these parameters',
      );
    }
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    this.shape = Shapes.rectangle;

    if (width <= 0 || height <= 0) {
      throw new Error(
        'It`s not possible to create a rectangle with these parameters',
      );
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
