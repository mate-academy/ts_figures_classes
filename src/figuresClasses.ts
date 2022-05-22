enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle ;

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    const area
      = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('No, no! This is not rigth! '
        + 'You entered wrong side sizes! '
        + 'All sizes have to be greater than 0!');
    }

    if (((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
      throw new Error('Oh no! This is not so rigth! '
        + 'I can not connect your sides togeter!'
        + 'The longest side of a triangle has to be '
        + 'less than a sum of two others');
    }
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('No, no, no! This is wrong size! '
      + 'Enter correct radius, greater than 0!');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  getArea(): number {
    return this.width * this.heigth;
  }

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('This is not so rigth! Enter both sizes greater than 0!');
    }
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
