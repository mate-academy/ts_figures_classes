type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function checkSide(...a: number[]): number {
  const sortArr = a.sort((num1, num2) => num1 - num2);

  if (sortArr[2] >= sortArr[0] + sortArr[1]) {
    throw new Error(`sides ${a[0]}, ${a[1]} and ${a[2]} can't form a triangle`);
  }

  return 0;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('not correct side data');
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
      throw new Error('not correct radius');
    }
  }

  getArea():number {
    const { radius } = this;
    const s = Math.PI * radius * radius;

    if (Number.isInteger(s)) {
      return s;
    }

    return Number(s.toFixed(2));
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
      throw new Error('not correct side data');
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

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
