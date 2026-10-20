export type ShapType = 'triangle' | 'circle' | 'rectangle';
export type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapType;
  color: ColorType;
  getArea(): number;
}

function floorToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape: ShapType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides must be greater than 0');
    }

    const longest = Math.max(a, b, c);
    const sumOfOthers = a + b + c - longest;

    if (longest >= sumOfOthers) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return floorToHundredths(area);
  }
}

export class Circle implements Figure {
  readonly shape: ShapType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }
  }

  getArea(): number {
    return floorToHundredths(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  readonly shape: ShapType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be greater than 0');
    }
  }

  getArea(): number {
    return floorToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
