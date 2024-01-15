enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  'red', 'green', 'blue'
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].every((side) => side <= 0)) {
      throw new Error('your length should be more than 0');
    }

    if (Math.max(a, b, c) >= (a + b + c) - Math.max(a, b, c)) {
      throw new Error('your length of sides are incorrect');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      (halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('sides must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
