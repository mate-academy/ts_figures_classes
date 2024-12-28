type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const validatePositive = (values: number[], errorMessage: string): void => {
  if (values.some((value) => value <= 0)) {
    throw new Error(errorMessage);
  }
};

const validateTriangleSides = (a: number, b: number, c: number): void => {
  const sides = [a, b, c].sort((x, y) => x - y);

  if (sides[2] >= sides[0] + sides[1]) {
    throw new Error(
      'The longest side of a triangle cannot be greater than' +
        ' the sum of the lengths of the other two sides',
    );
  }
};

const roundedArea = (area: number): number => Math.floor(area * 100) / 100;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    validatePositive(
      [a, b, c],
      'The length of each side of the triangle must be greater than zero',
    );
    validateTriangleSides(a, b, c);
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundedArea(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    validatePositive(
      [radius],
      'The radius of the circle must be greater than zero',
    );
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return roundedArea(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    validatePositive(
      [width, height],
      'The length of each side of the rectangle must be greater than zero',
    );
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundedArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
