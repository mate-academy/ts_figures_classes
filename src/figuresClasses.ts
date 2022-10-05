type Color = 'red' | 'green' | 'blue';
enum Shape {
  Triangle= 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundArea(area: number): number {
  return (Math.trunc(area * 100) / 100);
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw Error('Triangle does not exist');
    }

    if (a < 0 || b < 0 || c < 0) {
      throw Error('Input data is not valid');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundArea(area);
  }
}

export class Circle {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius < 0) {
      throw Error('Input data is not valid');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundArea(area);
  }
}

export class Rectangle {
  shape: Shape;

  constructor(
    public color: Color,
    public length: number,
    public width: number,
  ) {
    this.shape = Shape.Rectangle;

    if (length < 0 || width < 0) {
      throw Error('Input data is not valid');
    }
  }

  getArea(): number {
    const area = this.length * this.width;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
