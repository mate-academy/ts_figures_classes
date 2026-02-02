type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}
export class Triangle implements Figure {
  public readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    const [s1, s2, s3] = sides;

    if (s3 >= s1 + s2) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDownToHundredths(area);
  }
}
export class Circle implements Figure {
  public readonly shape: Shape = 'circle';

  constructor(
    public readonly color: Color,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = 'rectangle';

  constructor(
    public readonly color: Color,
    public readonly width: number,
    public readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const areaStr = Number.isInteger(area) ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaStr}`;
}
