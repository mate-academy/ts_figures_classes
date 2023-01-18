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

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!isPositive(a, b, c) || !triangleSideChecker(a, b, c)) {
      throw new Error(
        'incorrect sides length (value  <= 0) '
          + 'or the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = ((this.a + this.b + this.c) / 2);
    const a = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return (Math.floor(a * 100) / 100);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!isPositive(radius)) {
      throw new Error('incorrect radius (value  <= 0)');
    }
  }

  getArea(): number {
    return (Math.floor((Math.PI * this.radius ** 2) * 100) / 100);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!isPositive(width, height)) {
      throw new Error('incorrect width or height (value  <= 0)');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
