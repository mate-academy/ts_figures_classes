enum Color {
  red,
  green,
  blue,
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

const ifLengthZero = (...args:number[]):void => {
  if (args[0] <= 0
    || args[1] <= 0 || args[2] <= 0) {
    throw new Error('Try to put another side length');
  }
};

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    ifLengthZero(this.a, this.b, this.c);

    const maxSideLength = Math.max(this.a, this.b, this.c);

    if (maxSideLength >= (this.a + this.b + this.c - maxSideLength)) {
      throw new Error('One of your sides is bigger then sum of two other');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    ifLengthZero(this.radius);
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    ifLengthZero(this.a, this.b);
  }

  getArea(): number {
    return Math.floor(this.a * this.b);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
