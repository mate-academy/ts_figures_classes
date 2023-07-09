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
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundToHundredth(area: number): number {
  return Math.floor(100 * area) / 100;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  getArea = (): number => {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const aDiff = semiperimeter - this.a;
    const bDiff = semiperimeter - this.b;
    const cDiff = semiperimeter - this.c;
    const triangleArea = Math.sqrt(semiperimeter * aDiff * bDiff * cDiff);

    return roundToHundredth(triangleArea);
  };

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
    ) {
      throw new Error('A side of a triangle cannot have a negative value');
    }

    if (
      a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Enter valid triangle sides');
    }
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  getArea = (): number => {
    const circleArea = Math.PI * (this.radius ** 2);

    return roundToHundredth(circleArea);
  };

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }
}

export class Rectangle {
  shape = Shape.rectangle;

  getArea = (): number => {
    const rectangleArea = this.height * this.width;

    return roundToHundredth(rectangleArea);
  };

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must have positive values');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
