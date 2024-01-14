type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (![this.a, this.b, this.c].every((side) => side > 0)) {
      throw new Error(
        'some side(-s) equal(-s) 0, non-existent triangle',
      );
    }

    const sides = [];

    sides.push(this.a, this.b, this.c);

    sides.sort((side1, side2) => side2 - side1);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        'wrong sides, non-existent triangle',
      );
    }
  }

  getArea(): number {
    const sides: number[] = [];

    sides.push(this.a, this.b, this.c);

    const halfPerimetr = sides.reduce((sum, element) => sum + element, 0) / 2;

    const area = Math
      .sqrt(
        halfPerimetr
        * (halfPerimetr - this.a)
        * (halfPerimetr - this.b)
        * (halfPerimetr - this.c),
      );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(
        'radius should be > 0',
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if ([a, b].some((x) => x <= 0)) {
      throw new Error(
        'sides should be >= 0',
      );
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
