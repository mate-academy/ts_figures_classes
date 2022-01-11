enum Shape {
  Triangle,
  Circle,
  Rectangle
}

enum Color {
  Red,
  Green,
  Blue
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Enter correct values of triangle sides');
    }
  }

  getArea(): number {
    const sp = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(sp * (sp - this.a) * (sp - this.b) * (sp - this.c));

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be more then 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Size should be more then 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
