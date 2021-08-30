enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length should be greater than 0');
    }

    const arrayOfTriangle: number[] = [a, b, c]
      .sort((x: number, y: number) => y - x);

    if (arrayOfTriangle[0] === arrayOfTriangle[1] + arrayOfTriangle[2]) {
      throw new Error('A triangle can\'t be created from these 3 sides');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2; // half of perimeter
    const area: number = (p
      * (p - this.a)
      * (p - this.b)
      * (p - this.c)) ** (1 / 2); // Heron's formula

    return Number(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length should be greater than 0');
    }
  }

  getArea(): number {
    const area: number = 3.14 * this.radius ** 2;

    return Number(area);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side length has to be grater than 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Number(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea().toFixed(2)}`;
}
