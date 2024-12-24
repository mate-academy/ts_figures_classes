export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color;

  constructor(
    color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;

    if (a <= 0) {
      throw new Error('`a` can`t be lower or equal zero');
    }

    if (b <= 0) {
      throw new Error('`b` can`t be lower or equal zero');
    }

    if (c <= 0) {
      throw new Error('`c` can`t be lower or equal zero');
    }

    const longest: number = Math.max(a, b, c);

    if (
      (a === longest && a >= b + c) ||
      (b === longest && b >= a + c) ||
      (c === longest && c >= b + a)
    ) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiPerimeter *
            (semiPerimeter - this.a) *
            (semiPerimeter - this.b) *
            (semiPerimeter - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color;

  constructor(
    color: string,
    private radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('`radius` can`t be lower or equal zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color;

  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (width <= 0) {
      throw new Error('`width` can`t be lower or equal zero');
    }

    if (height <= 0) {
      throw new Error('`height` can`t be lower or equal zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
