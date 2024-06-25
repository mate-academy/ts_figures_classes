export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

function areaRound(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    const sides = [a, b, c].sort((side1, side2) => side1 - side2);
    const isValidSides = sides[2] < sides[0] + sides[1];

    if (a <= 0 || b <= 0 || c <= 0 || !isValidSides) {
      throw new Error(
        'Triangle sides must be positive and satisfy the triangle inequality',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return areaRound(area);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return areaRound(area);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be positive numbers');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return areaRound(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
