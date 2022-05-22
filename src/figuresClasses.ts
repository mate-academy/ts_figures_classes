enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

function RoundDown(squere: number): number {
  return Math.floor(squere * 100) / 100;
}

function getError(): never {
  throw new Error('invalid params');
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const getMax: number[] = [this.a, this.b, this.c]
      .sort((sideA, sideB) => sideB - sideA);

    if (a <= 0 || b <= 0 || c <= 0) {
      getError();
    }

    if (getMax[0] >= getMax[1] + getMax[2]) {
      getError();
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return RoundDown(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(public color: Colors, public radius: number) {
    if (radius <= 0) {
      getError();
    }
  }

  getArea(): number {
    return RoundDown(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Colors,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      getError();
    }
  }

  getArea(): number {
    return RoundDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
