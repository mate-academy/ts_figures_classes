enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

function roundToHundreths(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0) {
      throw new Error('Side a should be positive!');
    }

    if (sideB <= 0) {
      throw new Error('Side b should be positive!');
    }

    if (sideC <= 0) {
      throw new Error('Side c should be positive!');
    }

    let longestSide = sideA >= sideB ? sideA : sideB;

    longestSide = sideC >= longestSide ? sideC : longestSide;

    if (longestSide >= sideA + sideB + sideC - longestSide) {
      throw new Error('The longest side is longer than a sum of two others!');
    }

    this.shape = Shape.Triangle;
  }

  getArea(): number {
    const semiperimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return roundToHundreths(
      Math.sqrt(
        semiperimeter *
          (semiperimeter - this.sideA) *
          (semiperimeter - this.sideB) *
          (semiperimeter - this.sideC),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive!');
    }

    this.shape = Shape.Circle;
  }

  getArea(): number {
    return roundToHundreths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width should be positive!');
    }

    if (height <= 0) {
      throw new Error('Height should be positive!');
    }

    this.shape = Shape.Rectangle;
  }

  getArea(): number {
    return roundToHundreths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return 'A ' + figure.color + ' ' + figure.shape + ' - ' + figure.getArea();
}
