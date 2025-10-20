type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function floor2(n: number): number {
  return Math.floor(n * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  readonly color: Color;

  private readonly a: number;

  private readonly b: number;

  private readonly c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if ([a, b, c].some((v) => v <= 0)) {
      throw new Error('Triangle sides must be greater than 0');
    }

    const max = Math.max(a, b, c);
    const sum = a + b + c;

    if (max >= sum - max) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return floor2(area);
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  readonly color: Color;

  private readonly radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return floor2(area);
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  readonly color: Color;

  private readonly width: number;

  private readonly height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return floor2(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
