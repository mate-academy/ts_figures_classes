enum FigureShape{
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum FigureColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: FigureShape;
  color: FigureColor;

  getArea(): number;
}

export class Triangle {
  shape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (Math.min(sideA, sideB, sideC) <= 0) {
      throw new Error('wrong value');
    }

    const sum = sideA + sideB;

    if (sum <= sideA || sum <= sideB || sum <= sideC) {
      throw new Error('wrong value');
    }
  }

  getArea(): number {
    const perimeter: number = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(
      perimeter * (perimeter - this.sideA)
      * (perimeter - this.sideB)
      * (perimeter - this.sideC),
    );

    return Math.floor(100 * area) / 100;
  }
}

export class Circle {
  shape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`radius: ${this.radius} is not valid`);
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;

    return area;
  }
}

export class Rectangle {
  shape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public length: number,
    public width: number,
  ) {
    if (this.length <= 0 || this.width <= 0) {
      throw new Error('wrong value');
    }
  }

  getArea(): number {
    const area = this.length * this.width;

    return Math.floor(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
