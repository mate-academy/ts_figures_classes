
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

function roundDownToHundredths(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error('incorrect length of the side of the figure');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const halfPerimeter: number = (a + b + c) / 2;

    const area = Math.sqrt(halfPerimeter * ((halfPerimeter - a)
    * (halfPerimeter - b) * (halfPerimeter - c)));

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less or equal zero');
    }
  }

  getArea(): number {
    return roundDownToHundredths(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side cannot be less or equal zero');
    }
  }

  getArea(): number {
    return roundDownToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
