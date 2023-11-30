export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sortedSides = [a, b, c].sort((
      firstSide, secondSide,
    ) => secondSide - firstSide);

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      throw new Error(
        'Invalid sides of triangle',
      );
    }
  }

  getArea(): number {
    const square = (this.a + this.b + this.c) / 2;

    return Math.sqrt(
      square * (square - this.a)
        * (square - this.b) * (square - this.c),
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius of circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid sizes of sides of rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = (+figure.getArea().toFixed(2)).toString();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
