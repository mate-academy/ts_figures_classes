export enum Color {
  red,
  green,
  blue,
}
export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  longestSide = 0;

  sides: [number, number, number];

  sumOfSides: number;

  constructor(
    public color: Color,
    ...args: [number, number, number]
  ) {
    this.sides = [...args];

    this.sides.forEach((side) => {
      if (side > this.longestSide) {
        this.longestSide = side;
      }

      if (side <= 0) {
        throw new Error('One of the sides is too short');
      }
    });

    this.sumOfSides = [...args].reduce((partialSum, a) => partialSum + a, 0);

    if (this.longestSide >= (this.sumOfSides - this.longestSide)) {
      throw new Error('Triangle proportion is incorrect');
    }
  }

  getArea(): number {
    const s = this.sumOfSides / 2;
    const area: number = Math.sqrt(s
      * (s - this.sides[0])
      * (s - this.sides[1])
      * (s - this.sides[2]));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius is too short');
    }
  }

  getArea(): number {
    const res = Math.PI * (this.radius ** 2);

    return Number(String(Math.round(res * 1000) / 1000).slice(0, -1));
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  sides: [number, number];

  constructor(
    public color: Color,
    ...args: [number, number]
  ) {
    this.color = color;
    this.sides = [...args];

    this.sides.forEach((side) => {
      if (side <= 0) {
        throw new Error('One of the sides is too short');
      }
    });
  }

  getArea(): number {
    return this.sides[0] * this.sides[1];
  }
}

export function getInfo(figure: Figure): string {
  const res: string = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return res;
}
