enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One of the sides is less or equal 0!');
    }

    const arrayOfSides = [this.a, this.b, this.c];
    const longestSide = Math.max(...arrayOfSides);

    arrayOfSides.splice(arrayOfSides.indexOf(longestSide), 1);

    if (longestSide >= arrayOfSides[0] + arrayOfSides[1]) {
      throw new Error('It\'s not a triangle');
    }
  }

  getArea(): number {
    const sPerimeter = (this.a + this.b + this.c) / 2;

    return Math.round(Math.sqrt(sPerimeter * (sPerimeter - this.a)
    * (sPerimeter - this.b) * (sPerimeter - this.c)) * 100) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius is less or equal 0!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigh: number,
  ) {
    if (this.width <= 0 || this.heigh <= 0) {
      throw new Error('One of the sides is less or equal 0!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.heigh);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
