type Color = 'red' | 'green' | 'blue';

const round = (n: number): number => Math.floor(n * 100) / 100;

const areStrictlyPositive = (...numbers: number[]): boolean => {
  return numbers.every((number) => number > 0);
};

type TriangleSides = [number, number, number];

const isTriangleValid = (...sides: TriangleSides): boolean => {
  const sortedSides: number[] = [...sides].sort((n, m) => n - m);

  return sortedSides[2] - sortedSides[1] - sortedSides[0] < 0;
};

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  getArea(): number;
}

const getFigureErrorText = (
  shape: Figure['shape'],
  ...sides: number[]
): string => {
  if (shape === 'circle') {
    return `radius of ${sides[0]} can't form a ${shape}`;
  }

  const sidesText = `${sides.slice(0, -1).join(', ')} and ${sides[sides.length - 1]}`;

  return `sides ${sidesText} can't form a ${shape}`;
};

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (!areStrictlyPositive(a, b, c) || !isTriangleValid(a, b, c)) {
      throw new Error(getFigureErrorText(this.shape, a, b, c));
    }
  }

  public getArea(): number {
    const half = (this.a + this.b + this.c) / 2;

    return round(
      Math.sqrt(half * (half - this.a) * (half - this.b) * (half - this.c)),
    );
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (!areStrictlyPositive(radius)) {
      throw new Error(getFigureErrorText(this.shape, radius));
    }
  }

  public getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (!areStrictlyPositive(width, height)) {
      throw new Error(getFigureErrorText(this.shape, width, height));
    }
  }

  public getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
