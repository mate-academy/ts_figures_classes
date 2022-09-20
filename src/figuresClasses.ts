enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  color: Colors;
  shape: Shapes;
  a: number;
  getArea();
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shapes,
  ) {
    this.shape = Shapes.Triangle;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('side cannot be negative or 0');
    }

    const sideArr = [this.a, this.b, this.c];
    const max = Math.max(...sideArr);

    sideArr.splice(sideArr.indexOf(max), 1);

    const summTwoSides = sideArr.reduce((first, second) => first + second);

    if (max >= summTwoSides) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public shape: Shapes,
  ) {
    this.shape = Shapes.Circle;

    if (this.a <= 0) {
      throw new Error('side cannot be negative or 0');
    }
  }

  getArea(): number {
    const S = Math.PI * this.a ** 2;

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public shape: Shapes,
  ) {
    this.shape = Shapes.Rectangle;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('side cannot be negative or 0');
    }
  }

  getArea(): number {
    const S = this.a * this.b;

    return Math.floor(S * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
