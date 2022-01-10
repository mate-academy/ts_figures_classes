enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function rounded(area: number): number {
  const partsOfNumber = String(area).split('.');

  if (partsOfNumber.length > 1) {
    partsOfNumber[1] = partsOfNumber[1].slice(0, 2);
  }

  return +partsOfNumber.join('.');
}

export class Triangle implements Figure {
  shape: Shape;

  validSides(): boolean {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return false;
    }

    const maxSide = Math.max(this.a, this.b, this.c);

    const sumSides = [this.a, this.b, this.c]
      .reduce((sum, side) => {
        return maxSide !== side
          ? sum + side
          : sum;
      }, 0);

    return maxSide < sumSides;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (!this.validSides()) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return rounded(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return rounded(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    return rounded(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
