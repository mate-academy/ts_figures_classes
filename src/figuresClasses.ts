
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('One of the sides of the triangle is equal to 0');
    }

    if (a + b <= c || c + b <= a || a + c <= b) {
      throw new Error(`One side of the triangle can't
      be equal or bigger than sum of two others`);
    }
  }

  getArea(): number {
    const halfPerimeter: number = 0.5 * (this.a + this.b + this.c);
    const areaSize: number = Math.sqrt(halfPerimeter * ((halfPerimeter - this.a)
      * (halfPerimeter - this.b) * (halfPerimeter - this.c)));

    return Math.round(areaSize * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius of the cicle can`t be 0 or less than 0');
    }
  }

  getArea(): number {
    const areaSize: number = Math.PI * this.radius ** 2;

    return Math.floor(areaSize * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Side of rectangle can`t be equal or less than 0');
    }
  }

  getArea(): number {
    const areaSize: number = this.a * this.b;

    return areaSize;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
