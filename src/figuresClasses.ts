type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  a: number,
  b: number,
  c: number,

  getArea: () => {},
}

const checkSides = (sides: number[]): void => {
  let longestSide = 0;
  let sumOfTwoSides = 0;

  for (let i: number = 0; i < sides.length; i += 1) {
    if (sides[i] <= 0) {
      throw new Error('Each side must be bigger than 0');
    }

    longestSide = sides[i] > longestSide ? sides[i] : longestSide;
    sumOfTwoSides += sides[i];
  }

  sumOfTwoSides -= longestSide;

  if (sides.length === 3 && longestSide >= sumOfTwoSides) {
    throw new Error("sides 1, 2 and 3 can't form a triangle");
  }
};

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkSides([a, b, c]);
  }

  getArea({ a, b, c } = this): number {
    const semiP = (a + b + c) / 2;
    const area = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Partial<Figure> {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkSides([radius]);
  }

  getArea({ radius } = this): number {
    return Math.floor((radius * radius * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Partial<Figure> {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    checkSides([a, b]);
  }

  getArea({ a, b } = this): number {
    return a * b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
