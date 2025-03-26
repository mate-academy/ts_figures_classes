export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `Invalid triangle sides: a=${a}, b=${b}, c=${c}. The sum of any two sides must be greater than the third side.`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        `Invalid radius: ${radius}. Radius must be greater than zero.`,
      );
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Invalid dimensions: width=${width}, height=${height}. Both width and height must be greater than zero.`,
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
