type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Sides of a triangle must be greater than 0');
    }

    if (
      sideA >= sideB + sideC ||
      sideB >= sideA + sideC ||
      sideC >= sideA + sideB
    ) {
      throw new Error(`sides ${sideA}, ${sideB}
      and ${sideC} can't form a triangle`);
    }
  }

  getArea(): number {
    const perimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const resultTriangle = Math.sqrt(
      perimeter *
        (perimeter - this.sideA) *
        (perimeter - this.sideB) *
        (perimeter - this.sideC),
    );

    return Math.round(resultTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius} can't form a circle`);
    }
  }

  getArea(): number {
    const resultCircle = Math.PI * this.radius * this.radius;

    return Math.floor(resultCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`radius ${width} and ${height} can't form a rectangle`);
    }
  }

  getArea(): number {
    const resultRectangle = this.width * this.height;

    return Math.round(resultRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
