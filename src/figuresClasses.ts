type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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
    if (a < 1 || b < 1 || c < 1) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const perimeter = (a + b + c) / 2;
    const area = Math.floor(
      Math.sqrt(
        perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c),
      ) * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 1) {
      throw new Error('radius is null');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public weidth: number,
    public height: number,
  ) {
    if (weidth < 1 || height < 1) {
      throw new Error('All side lengths must be more than 0');
    }
  }

  getArea(): number {
    const { weidth, height } = this;

    return Math.floor(weidth * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
