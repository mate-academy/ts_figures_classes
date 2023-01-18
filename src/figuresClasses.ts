type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function isPositive(...args: number[]): boolean {
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] < 0) {
      return false;
    }
  }

  return true;
}

function triangleSideChecker(...args: number[]): boolean {
  const sortedSides: number[] = args.sort((a: number, b:number) => (
    b - a
  ));

  if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
    return false;
  }

  return true;
}
export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (!isPositive(a, b, c) || !triangleSideChecker(a, b, c)) {
      throw new Error(
        'incorrect sides length (value  <= 0) '
          + 'or the longest side of a triangle is >= than a sum of two others',
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = ((this.a + this.b + this.c) / 2);
    const a = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return (Math.floor(a * 100) / 100);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public color: Color;

  public radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    if (!isPositive(radius)) {
      throw new Error('incorrect radius (value  <= 0)');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return (Math.floor((Math.PI * this.radius ** 2) * 100) / 100);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public color: Color;

  public height: number;

  public width: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    if (!isPositive(width, height)) {
      throw new Error('incorrect width or height (value  <= 0)');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
