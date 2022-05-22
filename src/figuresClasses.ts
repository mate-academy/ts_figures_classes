function isInvalidInput(...sides: number[]): void {
  sides.forEach((side) => {
    if (side <= 0) {
      throw new Error('One of the sides is equal to zero or less');
    }
  });
}

function rounder(num: number):number {
  return Math.floor(num * 100) / 100;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    isInvalidInput(a, b, c);

    const sortedSides: number[] = [a, b, c].sort((x, y) => x - y);

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]) {
      throw new Error(`the longest side of a triangle is >= than a
      sum of two others`);
    }
  }

  getArea():number {
    const perimeterHalf = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(perimeterHalf * (perimeterHalf - this.a)
    * (perimeterHalf - this.b) * (perimeterHalf - this.c));

    return rounder(result);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    isInvalidInput(radius);
  }

  getArea():number {
    const result = Math.PI * (this.radius ** 2);

    return rounder(result);
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    isInvalidInput(width, height);
  }

  getArea():number {
    const result = this.width * this.height;

    return rounder(result);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
