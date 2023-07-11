type Colors = 'red' | 'green' | 'blue';

export enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shapes.Triangle | Shapes.Circle | Shapes.Rectangle,
  color: Colors,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesOfTriangle = [a, b, c].sort((firstElement, secondElement) => (
      secondElement - firstElement
    ));

    if (sidesOfTriangle[0] >= sidesOfTriangle[1] + sidesOfTriangle[2]) {
      throw new Error('Error');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error');
    }
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle {
  shape: Shapes = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error');
    }

    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = Number(figure.getArea().toFixed(2));

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
