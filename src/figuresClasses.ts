enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const roundNumber = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape: Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    const arrayOfNumbers = [a, b, c];
    const maxNumber = Math.max(...arrayOfNumbers);

    delete arrayOfNumbers[maxNumber];

    const sumOfSides = arrayOfNumbers[0] + arrayOfNumbers[1];

    if (a <= 0 || b <= 0 || c <= 0 || maxNumber >= sumOfSides) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerim = (this.a + this.b + this.c) * 0.5;

    return roundNumber(+(Math.sqrt(
      semiPerim
      * (semiPerim - this.a)
      * (semiPerim - this.b)
      * (semiPerim - this.c),
    )).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius <= 0) {
      throw new Error(`Radius ${radius} can't form a circle`);
    }
  }

  getArea(): number {
    return roundNumber(
      +(this.radius * this.radius * Math.PI).toFixed(3),
    );
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width ${width} and height ${height} can't form a rectangle`,
      );
    }
  }

  getArea(): number {
    return roundNumber(+(this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
