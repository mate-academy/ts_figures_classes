type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
