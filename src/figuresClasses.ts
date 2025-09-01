export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public color: 'red' | 'green' | 'blue';

  private a: number;

  private b: number;

  private c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Triangle side 'a' must be greater than 0, got ${a}`);
    }

    if (b <= 0) {
      throw new Error(`Triangle side 'b' must be greater than 0, got ${b}`);
    }

    if (c <= 0) {
      throw new Error(`Triangle side 'c' must be greater than 0, got ${c}`);
    }

    if (a + b <= c) {
      throw new Error(
        `Triangle inequality failed: a + b must be greater than c (${a} + ${b} <= ${c})`,
      );
    }

    if (a + c <= b) {
      throw new Error(
        `Triangle inequality failed: a + c must be greater than b (${a} + ${c} <= ${b})`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Triangle inequality failed: b + c must be greater than a (${b} + ${c} <= ${a})`,
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public color: 'red' | 'green' | 'blue';

  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error(`Circle radius must be greater than 0, got ${radius}`);
    }
    this.color = color;
    this.radius = radius;
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0) {
      throw new Error(`Rectangle width must be greater than 0, got ${width}`);
    }

    if (height <= 0) {
      throw new Error(`Rectangle height must be greater than 0, got ${height}`);
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
