enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: string;
  getArea(): number;
  shape: Shape;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides must be > 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('these values cant form a triangle');
    }
  }

  shape = Shape.Triangle;

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(s
      * (s - this.a)
      * (s - this.b)
      * (s - this.c)))
      * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(public color: string, private radius: number) {
    if (radius <= 0) {
      throw new Error('radius must be > 0');
    }
  }

  shape = Shape.Circle;

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('sides must be > 0');
    }
  }

  shape = Shape.Rectangle;

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
