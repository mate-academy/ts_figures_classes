export enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export enum Colors {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const hypotenuse = Math.max(a, b, c);

    const sumOfCathets = [a, b, c]
      .filter((side) => side !== hypotenuse)
      .reduce((cathet1, cathet2) => cathet1 + cathet2, 0);

    if (hypotenuse >= sumOfCathets) {
      throw new Error('It`s not a triangle!');
    }

    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('Incorrect side lengths!');
    }
  }

  public shape = Shapes.triangle;

  public getArea(): number {
    const semiPerimiter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimiter
      * (semiPerimiter - this.a)
      * (semiPerimiter - this.b)
      * (semiPerimiter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid length of radius!');
    }
  }

  public shape = Shapes.circle;

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect side lengths!');
    }
  }

  public shape = Shapes.rectangle;

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
