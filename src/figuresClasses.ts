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

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('one of your side is 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw Error('No way my friend, check inputs');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return (Math.floor(area * 100)) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw Error('I think you put negative raius');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return (Math.floor(area * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw Error('Dude are you kidding?');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return (Math.floor(area * 100)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
