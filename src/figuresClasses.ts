type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'green' | 'red' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.isInvalidTriangle()) {
      throw new Error('Impossible to make a triangle with such sides');
    }
  }

  private isInvalidTriangle(): boolean {
    const { a, b, c } = this;
    const inspect = [
      a <= 0,
      b <= 0,
      c <= 0,
      a + b <= c,
      a + c <= b,
      b + c <= a,
    ];

    return inspect.some(Boolean);
  }

  getArea(): number {
    const halfPerimeter = 0.5 * (this.a + this.b + this.c);

    return Math.floor(
      100
        * Math.sqrt(halfPerimeter
        * (halfPerimeter - this.a)
        * (halfPerimeter - this.b)
        * (halfPerimeter - this.c)),
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Impossible to make a circle with such radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.isInvalidRectangle()) {
      throw new Error('Impossible to make a rectangle with such parameters');
    }
  }

  private isInvalidRectangle(): boolean {
    return (this.width <= 0 || this.height <= 0);
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
