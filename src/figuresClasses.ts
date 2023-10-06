enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes
  color: string
  getArea: () => number
}

export class Triangle implements Figure {
  shape: Shapes;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(...[a, b, c]);
    const otherSidesSum = [a, b, c].reduce((acc, item) => {
      return acc + item;
    }, 0) - maxSide;

    if (![a, b, c].every((side) => side > 0)
    || maxSide >= otherSidesSum) {
      throw new Error('Invalid side(s) length');
    }
    this.shape = Shapes.triangle;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const res = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(res.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shapes;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius length');
    }

    this.shape = Shapes.circle;
  }

  getArea(): number {
    const res = Math.PI * (this.radius ** 2);

    return Math.floor(res * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (![height, width].every((side) => side > 0)) {
      throw new Error('Invalid side(s) length');
    }

    this.shape = Shapes.rectangle;
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
