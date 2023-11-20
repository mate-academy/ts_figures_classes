type Shape = 'triangle' | 'rectangle' | 'circle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)
    ) {
      throw new Error('Wrong data');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, private radius: number) {
    if (radius <= 0) {
      throw new Error('Wrong data');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color, private a: number, private b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Each side should be bigger then 0');
    }
  }

  getArea(): number {
    return Math.floor((this.a * this.b * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
