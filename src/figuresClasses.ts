export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public color: 'red' | 'green' | 'blue';

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Side 'a' must be greater than 0, got ${a}`);
    }

    if (b <= 0) {
      throw new Error(`Side 'b' must be greater than 0, got ${b}`);
    }

    if (c <= 0) {
      throw new Error(`Side 'c' must be greater than 0, got ${c}`);
    }

    const longest = Math.max(a, b, c);

    if (longest === a && a >= b + c) {
      throw new Error(
        `Triangle inequality violated: side 'a' (${a}) >= b + c (${b} + ${c})`,
      );
    }

    if (longest === b && b >= a + c) {
      throw new Error(
        `Triangle inequality violated: side 'b' (${b}) >= a + c (${a} + ${c})`,
      );
    }

    if (longest === c && c >= a + b) {
      throw new Error(
        `Triangle inequality violated: side 'c' (${c}) >= a + b (${a} + ${b})`,
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const underRoot = s * (s - this.a) * (s - this.b) * (s - this.c);
    const area = Math.sqrt(Math.max(underRoot, 0));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public color: 'red' | 'green' | 'blue';

  public radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0, got ${radius}`);
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public color: 'red' | 'green' | 'blue';

  public width: number;

  public height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0) {
      throw new Error(`Width must be greater than 0, got ${width}`);
    }

    if (height <= 0) {
      throw new Error(`Height must be greater than 0, got ${height}`);
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
