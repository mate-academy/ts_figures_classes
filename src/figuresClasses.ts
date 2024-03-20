// import { sign } from 'crypto';

export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
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
    this.color = color;
  }

  getArea(): number {
    const perimetr = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.sqrt(
      perimetr *
        (perimetr - this.sideA) *
        (perimetr - this.sideB) *
        (perimetr - this.sideC),
    );
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  constructor(
    color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius} can't form a triangle`);
    }
    this.color = color;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(
    color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`radius ${width} and ${height} can't form a triangle`);
    }
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  // let area = figure.getArea();

  // if (area % 1 !== 0) {
  //   area = area.toFixed(2);
  // }
  const area = Math.round(figure.getArea() * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${+area}`;
}
