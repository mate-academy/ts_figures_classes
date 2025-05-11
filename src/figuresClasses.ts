type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of side is <= 0');
    }

    const sortedSides = [a, b, c].sort((side1, side2) => side1 - side2);

    if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
      throw new Error(
        'the longest side of a triangle is <= than a sum of two others',
      );
    }
  }

  getArea = (): number => {
    const semiP = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('radius cannot be <= 0');
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  };
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length of side cannot be <= 0');
    }
  }

  getArea = (): number => {
    return Math.floor(this.width * this.height * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
