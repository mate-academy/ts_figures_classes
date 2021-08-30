enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = Shape.Triangle,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.b <= 0) {
      throw new Error('Only positive numbers, please');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('The triangle cannot be formed: wrong sides');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(perimeter * (
      perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c));

    return square;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = Shape.Circle,
  ) {
    if (this.radius <= 0) {
      throw new Error('Only positive numbers, please');
    }
  }

  getArea(): number {
    return (this.radius ** 2) * 3.14;
  }
}

export class Rectangle {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape: Shape = Shape.Rectangle,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Only positive numbers, please');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  // const result = `A ${figure.color} ${figure.shape} - `
  // + `${(figure.getArea() % 1 === 0)
  //   ? figure.getArea()
  //   : figure.getArea().toFixed(2)}`;
  const result = `A ${figure.color} ${figure.shape} - `
  + `${+figure.getArea().toFixed(2)}`;

  return result;
}
