function isValidTriangle(sides: number[]): boolean {
  const longestSide: number = Math.max(...sides);
  const restSides: number[] = sides.filter(
    (num: number) => num !== longestSide,
  );

  return longestSide >= restSides[0] + restSides[1];
}

type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || isValidTriangle([a, b, c])
    ) {
      throw new Error('your error message');
    }
    this.shape = 'triangle';
  }

  getArea = (): number => {
    const s = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.round(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea = (): number => {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} `
    + `- ${figure.getArea()}`;
}
