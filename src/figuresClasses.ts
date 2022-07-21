enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error: sides cannot be are negative');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(`Error:sides ${a}, ${b} and ${c} cannot form a triangle`);
    }
  }

  public getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,

  ) {
    if (radius <= 0) {
      throw new Error('Error: radius cannot be a negative');
    }
  }

  public getArea(): number {
    const areaCircle = this.radius * this.radius * Math.PI;

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error: sides cannot be are negative');
    }
  }

  public getArea(): number {
    const areaRect = this.width * this.height;

    return +areaRect.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
