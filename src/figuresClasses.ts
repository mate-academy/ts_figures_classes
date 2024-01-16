enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error');
    }

    const [firstSide, secondSide, thirdSide]: number[] = [a, b, c]
      .sort((side1, side2) => side1 - side2);

    if (thirdSide >= firstSide + secondSide) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);

    return Number((Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c)).toFixed(2)));
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
