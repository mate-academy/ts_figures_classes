export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: Shapes = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: [number, number, number] = [a, b, c];

    sides.sort((side1, side2) => side1 - side2);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error('wrong triangle sides');
    }

    if (sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) {
      throw new Error('triangle side <= 0');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius <= 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100)
      / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('rectangle side <= 0');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
