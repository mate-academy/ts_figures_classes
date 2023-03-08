enum Shape {
  Circle = 'circle',
  Triangle = 'triangle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: string,
  shape: Shape,
  getArea: () => number,
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

function checkForValidInput(...args: number[]): void {
  args.forEach((arg) => {
    if (arg <= 0) {
      throw new Error('Invalid input: some argument <= 0');
    }
  });
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkForValidInput(a, b, c);

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid input: hypotenuse >= legs sum');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const area: number = Math.sqrt(
      ((a ** 2 + b ** 2 + c ** 2) ** 2) - (2 * (a ** 4 + b ** 4 + c ** 4)),
    ) / 4;

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkForValidInput(radius);
  }

  getArea(): number {
    const { radius } = this;
    const area: number = radius ** 2 * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkForValidInput(width, height);
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
