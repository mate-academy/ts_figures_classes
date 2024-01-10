type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function checkSide(...sides: number[]): number {
  const sortArr = sides.sort((num1, num2) => num1 - num2);

  if (sortArr[2] >= sortArr[0] + sortArr[1]) {
    throw new Error(
      `sides ${sides[0]}, ${sides[1]} and ${sides[2]} can't form a triangle`,
    );
  }

  return 0;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle sides.');
    }

    checkSide(a, b, c);
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    if (Number.isInteger(s)) {
      return s;
    }

    return Number(s.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius.');
    }
  }

  getArea(): number {
    const { radius } = this;
    const s = Math.PI * radius * radius;

    if (Number.isInteger(s)) {
      return s;
    }

    return Math.trunc(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions.');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const s = width * height;

    if (Number.isInteger(s)) {
      return s;
    }

    return Number(s.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
