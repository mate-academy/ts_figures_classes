type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: Function,
}

export class Triangle implements Figure {
  constructor(public color:Color, public a: number, public b: number,
    public c: number, public shape = Shape.Triangle) {
    const sides = [a, b, c];
    const sortedSides = sides.sort((sideA, sideB) => sideA - sideB);

    if (sortedSides[2] >= sortedSides[0] + sortedSides[1]) {
      throw new Error('This is not a triangle!');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('This is not a triangle!');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  constructor(public color: Color, public radius:number,
    public shape = Shape.Circle) {
    if (radius <= 0) {
      throw new Error('This is not a circle!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(public color: Color,
    public a: number, public b: number,
    public shape = Shape.Rectangle) {
    if (a <= 0 || b <= 0) {
      throw new Error('This is not a rectangle!');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
