type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  shape: Shape;

  color: Color;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("This shape doesn't exist.");
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea = (): number => {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const result: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(result * 100) / 100;
  };
}

export class Circle implements Figure {
  radius: number;

  shape: Shape;

  color: Color;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error("This shape doesn't exist.");
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea = (): number => {
    const area: number = this.radius ** 2 * Math.PI;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  shape: Shape;

  color: Color;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error("This shape doesn't exist.");
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea = (): number => {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
