type Forms = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Forms[];
  color: Colors[];
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public shape: Forms[],
    public color: Colors[],
    public a?: number,
    public b?: number,
    public c?: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const sumBothSides = [a, b, c]
      .reduce((sum, side) => sum + side) - longestSide;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length must be more than 0.');
    }

    if (longestSide >= sumBothSides) {
      throw new Error('The sum of two sides must be longer than third side.');
    }
  }

  getArea(): number {
    const sum = (this.a + this.b + this.c) / 2;
    const sqrt = Math.sqrt(sum * (sum - this.a)
      * (sum - this.b) * (sum - this.c));

    return Math.round(sqrt * 100) / 100;
  }
}

export class Circle extends Triangle {
  constructor(
    public radius: number,
    ...args: [Forms[], Colors[]]
  ) {
    super(...args);

    if (radius <= 0) {
      throw new Error('The radius must be more than 0.');
    }
  }

  getArea(): number {
    return Math.round((2 * Math.PI * this.radius) * 100) / 100;
  }
}

export class Rectangle extends Triangle {
  constructor(
    public width: number,
    public height: number,
    ...args: [Forms[], Colors[]]
  ) {
    super(...args);

    if (width <= 0 || height <= 0) {
      throw new Error('The width and height must be more than 0.');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
