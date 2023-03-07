enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

function validSides(...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error('Each side value should be bigger than 0!');
  }
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    validSides(a, b, c);

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Invalid side values!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number = 0,
  ) {
    validSides(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public a: number = 0,
    public b: number = 0,
  ) {
    validSides(a, b);
  }

  getArea(): number {
    const area = this.a * this.b;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
