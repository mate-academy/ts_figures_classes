enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }

    if (!Triangle.checkLengths(a, b, c)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }

  private static checkLengths(a: number, b: number, c: number): boolean {
    let max = b > a ? b : a;

    max = c > max ? c : max;

    return max < a + b + c - max;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  color: Color;

  r: number;

  constructor(color: Color, r: number) {
    if (r <= 0) {
      throw new Error();
    }
    this.color = color;
    this.r = r;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  color: Color;

  a: number;

  b: number;

  constructor(color: Color, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error();
    }
    this.a = a;
    this.b = b;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
