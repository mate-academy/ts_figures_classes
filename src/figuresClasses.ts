type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(area: number): number {
  return Math.floor(area * 100) / 100;
}

function areSidesValid(sides: number[]): void {
  const invalidSides = sides.some((side) => side <= 0);

  if (invalidSides) {
    throw new Error('All sides should be greater than 0');
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    areSidesValid([a, b, c]);

    const sides = [a, b, c].sort((x: number, y: number) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'The longest side of a triangle should be >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    areSidesValid([radius]);
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    areSidesValid([height, width]);
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
