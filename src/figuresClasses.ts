enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
// = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (!this.isValidTriangle()) {
      throw new Error('You cannot make a triangle with such sides');
    }
  }

  private isValidTriangle(): boolean {
    const conditions = [
      this.a <= 0,
      this.b <= 0,
      this.c <= 0,
      this.a + this.b <= this.c,
      this.b + this.c <= this.a,
      this.c + this.a <= this.b,
    ];

    return !conditions.some(Boolean);
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      halfPerimeter * (halfPerimeter - this.a)
      * (halfPerimeter - this.b) * (halfPerimeter - this.c),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('You cannot make a circle with such radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('You cannot make a rectangle with such parameters');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
