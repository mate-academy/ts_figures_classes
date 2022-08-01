type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

function findError(a: number, b: number, c: number): string {
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('Error message');
  }
}

function roundNumber(total: number): number {
  return Math.floor(+total * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    findError(a, b, c);
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(perimetr
      * (perimetr - this.a) * (perimetr - this.b) * (perimetr - this.c));

    return roundNumber(area);
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundNumber(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return (this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
