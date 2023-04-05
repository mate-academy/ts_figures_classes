type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: number;
}

export class Triangle {
  shape = 'triangle';

  color: Color;

  constructor(
    color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side of triangle shuld be positive number');
    }

    if (a + b <= c || c + b <= a || a + c <= b) {
      throw new Error('Triangle inequality rule');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const p: number = (semiPerimeter);

    return Number(Math.sqrt(p
      * (p - a) * (p - b) * (p - c)).toFixed(2));
  }
}
export class Circle {
  shape = 'circle';

  color: Color;

  constructor(
    color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of circle shuld be positive number');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  color: Color;

  constructor(
    color: Color,
    private width: number,
    private heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('Side of rectangle shuld be positive number');
    }

    this.color = color;
    this.width = width;
    this.heigth = heigth;
  }

  getArea(): number {
    return Number(this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
