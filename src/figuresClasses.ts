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
  shape: string;
  color: string;
  getArea(): number;
}

function roundNumberToHundreds(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const sum = sides.reduce((acc, curr) => acc + curr, 0);

    if (sides.some((el) => el <= 0)) {
      throw new Error('Invalid length of side(s)');
    }

    if (sides.some((side) => side >= sum - side)) {
      throw new Error('Triangle doesnt exist');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const sides = [a, b, c];
    const halfSum = sides.reduce((acc, curr) => acc + curr, 0) / 2;

    const area = Math.sqrt(
      halfSum * sides.reduce((acc, curr) => acc * (halfSum - curr), 1),
    );

    return roundNumberToHundreds(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius value (Radius <= 0');
    }
  }

  getArea(): number {
    return roundNumberToHundreds(Math.PI * Math.pow(this.radius, 2));
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid height or width value (value <= 0)');
    }
  }

  getArea(): number {
    return roundNumberToHundreds(this.width * this.height);
  }
}

export function getInfo<T extends Figure>(figure: T): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
