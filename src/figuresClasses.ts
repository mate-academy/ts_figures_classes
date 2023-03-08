enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

function validateSides(...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error('Each side value should be bigger than 0!');
  }
}

function roundValue(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validateSides(a, b, c);

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('The longest side should be >= than a sum of two others');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiperimeter
        * (semiperimeter - a)
        * (semiperimeter - b)
        * (semiperimeter - c),
    );

    return roundValue(area);
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    validateSides(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundValue(area);
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    validateSides(width, height);
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
