type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  area: number;
}

export class Triangle {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the sides is lower than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Longest side is bigger than the sum of two others');
    }

    this.shape = 'triangle';
    this.area = this.getArea();
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = 0.5 * (a + b + c);

    return Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }
}

export class Circle {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is lower than zero');
    }

    this.shape = 'circle';
    this.area = this.getArea();
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  area: number;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('One of the sides is lower than zero');
    }

    this.shape = 'rectangle';
    this.area = this.getArea();
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
