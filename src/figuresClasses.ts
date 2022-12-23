const hackerAlert = new Error('Congratz! You\'ve hacked the system!');

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}
enum Color {
  red,
  green,
  blue,
}
export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.min(a, b, c) <= 0
      || Math.max(a, b, c)
      >= this.a + this.b + this.c - Math.max(a, b, c)) {
      throw hackerAlert;
    }
  }

  getArea = (): number => {
    // p = perimeter / 2
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw hackerAlert;
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw hackerAlert;
    }
  }

  getArea = (): number => {
    return this.width * this.height;
  };
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
