export type Color = 'red' | 'green' | 'blue';

export type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const roundDown = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  constructor(
    color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Sides must be greater than 0, got: a=${a}, b=${b}, c=${c}`,
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Invalid triangle: a=${a}, b=${b}, c=${c}`);
    }

    this.color = color;
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  constructor(
    color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0, got: ${radius}`);
    }

    this.color = color;
  }

  getArea(): number {
    return roundDown(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  constructor(
    color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width and height must be greater than 0, got: width=${width}, height=${height}`,
      );
    }

    this.color = color;
  }

  getArea(): number {
    return roundDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
