function isValidTriangle(sides: number[]): boolean {
  const longestSide: number = Math.max(...sides);
  const restSides: number[] = sides.filter(
    (num: number) => num !== longestSide,
  );

  return longestSide >= restSides[0] + restSides[1];
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape.Triangle = Shape.Triangle;

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
      throw new Error('Parameter is not valid');
    }
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
  shape: Shape.Circle = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error('Parameter is not valid');
    }
  }

  getArea = (): number => {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Parameter is not valid');
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
