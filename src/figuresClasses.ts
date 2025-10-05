type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle' as const;

  public color: Color;

  constructor(
    color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.color = color;

    switch (true) {
      case a <= 0:
        throw new Error('side a must be > 0');

      case b <= 0:
        throw new Error('side b must be > 0');

      case c <= 0:
        throw new Error('side c must be > 0');
    }

    const max = Math.max(a, b, c);
    const sumTwo = a + b + c - max;

    if (max >= sumTwo) {
      throw new Error(
        `Invalid triangle sides: a=${a}, b=${b}, c=${c} — largest side must be less than sum of the other two`,
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle' as const;

  public color: Color;

  private radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('radius must be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle' as const;

  public color: Color;

  constructor(
    color: Color,
    private width: number,
    private height: number,
  ) {
    this.color = color;

    if (width <= 0) {
      throw new Error('width must be > 0');
    }

    if (height <= 0) {
      throw new Error('height must be > 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${area}`;
}
