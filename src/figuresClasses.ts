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

export interface Figure{
  shape: Shape;
  color: Color;
  getArea():number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color:Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    const sortedSides = [a, b, c].sort((side1, side2) => side2 - side1);

    if ([a, b, c].some((num) => num <= 0) === true) {
      throw new Error('The argument cannot be less than or equal to zero');
    }

    if (sortedSides[0] >= (sortedSides[1] + sortedSides[2])) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color:Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('The argument cannot be less than or equal to zero');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color:Color,
    public width:number,
    public height:number,
  ) {
    if ([width, height].some((num) => num <= 0) === true) {
      throw new Error('The argument cannot be less than or equal to zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
