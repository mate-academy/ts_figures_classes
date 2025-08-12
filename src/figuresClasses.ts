export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error('Triangle side a must be greater than 0');
    }

    if (b <= 0) {
      throw new Error('Triangle side b must be greater than 0');
    }

    if (c <= 0) {
      throw new Error('Triangle side c must be greater than 0');
    }

    if (b + c <= a) {
      throw new Error(
        'Side a must be less than the sum of the other two sides.',
      );
    }

    if (a + c <= b) {
      throw new Error(
        'Side b must be less than the sum of the other two sides.',
      );
    }

    if (a + b <= c) {
      throw new Error(
        'Side c must be less than the sum of the other two sides.',
      );
    }

    const validColors: Color[] = ['red', 'green', 'blue'];

    if (!validColors.includes(color)) {
      throw new Error(
        `Invalid color. Only ${validColors.join(', ')} are valid.`,
      );
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const triangleSquare = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Math.floor(triangleSquare * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0.');
    }

    const validColors: Color[] = ['red', 'green', 'blue'];

    if (!validColors.includes(color)) {
      throw new Error(
        `Invalid color. Only ${validColors.join(', ')} are valid.`,
      );
    }
  }

  getArea(): number {
    const circleSq = Math.PI * this.radius ** 2;

    return Math.floor(circleSq * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width must be > 0.');
    }

    if (height <= 0) {
      throw new Error('Height must be > 0.');
    }

    const validColors: Color[] = ['red', 'green', 'blue'];

    if (!validColors.includes(color)) {
      throw new Error(
        `Invalid color. Only ${validColors.join(', ')} are valid.`,
      );
    }
  }

  getArea(): number {
    const rectangleSq = this.width * this.height;

    return Math.floor(rectangleSq * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
