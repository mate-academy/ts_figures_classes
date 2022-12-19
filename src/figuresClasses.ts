type Colors = 'red' | 'green' | 'blue';

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
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
    this.shape = Shapes.Triangle;

    if (this.hasInvalidShape()) {
      throw new Error(
        `Its not possible to create a triangle with \
        ${this.sideA} ${this.sideB} ${this.sideC} parameters`,
      );
    }
  }
}
// ${this.sideA} ${this.sideB} ${this.sideC}
export class Circle implements Figure {
  shape: Shapes;

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    this.shape = Shapes.Circle;

    if (radius <= 0) {
      throw new Error(
        `It's not possible to create a circle with ${this.radius} parameter`,
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
    this.shape = Shapes.Rectangle;

    if (width <= 0 || height <= 0) {
      throw new Error(
        `It's not possible to create a rectangle with \
        ${this.width} ${this.height} parameters`,
      );
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
