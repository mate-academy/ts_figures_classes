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
  shape: Shape;
  color: Color;
  getArea(): number;
}

function rounding(number: number) :number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  color: Color;

  getArea = (): number => {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return rounding(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  };

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0
      || (Math.max(a, b, c) >= (a + b + c) - Math.max(a, b, c))) {
      throw new Error('Invalid sides');
    }
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  color: Color;

  getArea = (): number => rounding(Math.PI * (this.radius ** 2));

  constructor(
    color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;
    this.color = color;

    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  color: Color;

  getArea = (): number => Math.floor(this.height * this.width * 100) / 100;

  constructor(color: Color, public width: number, public height: number) {
    this.shape = Shape.Rectangle;
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Wrong sides');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
