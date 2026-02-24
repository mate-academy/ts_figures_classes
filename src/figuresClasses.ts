// Enums
export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

// Interface
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

// Helper для перевірки кольору
function parseColor(color: string): Color {
  if (!Object.values(Color).includes(color as Color)) {
    throw new Error(`Invalid color: ${color}`);
  }

  return color as Color;
}

// Triangle
export class Triangle implements Figure {
  public readonly shape = Shape.Triangle;

  public readonly color: Color;

  constructor(
    color: string,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    this.color = parseColor(color);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Triangle sides must be greater than 0. Received: ${a}, ${b}, ${c}`,
      );
    }

    const maxSide = Math.max(a, b, c);
    const sumOfOthers = a + b + c - maxSide;

    if (maxSide >= sumOfOthers) {
      throw new Error(
        `Triangle inequality violated. Sides ${a}, ${b}, ${c} cannot form a triangle.`,
      );
    }
  }

  public getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

// Circle
export class Circle implements Figure {
  public readonly shape = Shape.Circle;

  public readonly color: Color;

  constructor(
    color: string,
    private readonly radius: number,
  ) {
    this.color = parseColor(color);

    if (radius <= 0) {
      throw new Error(
        `Circle radius must be greater than 0. Received: ${radius}`,
      );
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

// Rectangle
export class Rectangle implements Figure {
  public readonly shape = Shape.Rectangle;

  public readonly color: Color;

  constructor(
    color: string,

    private readonly width: number,
    private readonly height: number,
  ) {
    this.color = parseColor(color);

    if (width <= 0 || height <= 0) {
      throw new Error(
        `Rectangle width and height must be greater than 0. Received: ${width}, ${height}`,
      );
    }
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

// getInfo

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
