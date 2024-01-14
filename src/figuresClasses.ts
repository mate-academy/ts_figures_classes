type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'blue' | 'red' | 'green';

function checkTriangle(a: number, b: number, c: number): boolean {
  const bigestSide = Math.max(a, b, c);
  const sidesIsGood: boolean = bigestSide < a + b + c - bigestSide;

  if (a > 0 && b > 0 && c > 0 && sidesIsGood) {
    return true;
  }

  return false;
}

function getTriangleSquare(a: number, b: number, c: number): number {
  const sp: number = (a + b + c) / 2;
  const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

  return Math.floor(area * 100) / 100;
}

function checkCircle(r: number): boolean {
  return r > 0;
}

function getCircleSquare(a: number): number {
  const area: number = Math.PI * a * a;

  return area;
}

function checkRectangle(a: number, b: number): boolean {
  return (a > 0 && b > 0);
}

function getRectangleArea(a: number, b: number): number {
  return a * b;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;

}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!checkTriangle(a, b, c)) {
      throw new Error('Check your triangle sides length');
    }
  }

  getArea(): number {
    const area: number = getTriangleSquare(this.a, this.b, this.c);

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (!checkCircle(r)) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    const area: number = getCircleSquare(this.r);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (!checkRectangle(a, b)) {
      throw new Error('All sides of rectangle should be more than 0');
    }
  }

  getArea(): number {
    const area = getRectangleArea(this.a, this.b);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
