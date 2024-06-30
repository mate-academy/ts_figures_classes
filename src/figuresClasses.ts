type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function roundDownHundreds(value: number): number {
  if (value === Math.round(value)) {
    return value;
  }

  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle' as Shape;

  constructor(
    public readonly color: Color,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    const sides = [a, b, c];
    const longestSide = Math.max(a, b, c);
    const sumOfOtherSides = sides.reduce((acc, side) => {
      if (side === longestSide) {
        return acc;
      }

      return acc + side;
    }, 0);
    const isCorrectTriangle = longestSide < sumOfOtherSides;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('Should have positive sides');
    }

    if (!isCorrectTriangle) {
      throw Error('Failed to create a triangle with current sides');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiPerimeter = 0.5 * (this.a + this.b + this.c);

    return roundDownHundreds(
      Math.sqrt(
        semiPerimeter *
          (semiPerimeter - this.a) *
          (semiPerimeter - this.b) *
          (semiPerimeter - this.c),
      ),
    );
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle' as Shape;

  constructor(
    public readonly color: Color,
    public readonly radius: number,
  ) {
    this.color = color;

    if (this.radius <= 0) {
      throw Error('Should have positive radius');
    }

    this.radius = radius;
  }

  getArea(): number {
    return roundDownHundreds(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle' as Shape;

  constructor(
    public readonly color: Color,
    public readonly width: number,
    public readonly height: number,
  ) {
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw Error('Should have only positive sides');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return roundDownHundreds(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
