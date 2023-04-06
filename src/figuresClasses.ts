type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' |'blue';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      // eslint-disable-next-line
      throw new Error(`Every side (a: ${a}, b: ${b}, c: ${c})of triangle must be greater than 0`);
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
    // eslint-disable-next-line
      throw new Error('The longest side of a triangle should be greater or equal to a sum of two others');
    }
  }

  getArea(): number {
    const halfOfAPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.floor(
      Math.sqrt(halfOfAPerimeter
        * (halfOfAPerimeter - this.a)
        * (halfOfAPerimeter - this.b)
        * (halfOfAPerimeter - this.c)) * 100,
    ) / 100;

    return square;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius (${radius}) of a circle must be greater than 0`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      // eslint-disable-next-line
      throw new Error(`Width (${width}) and heigth (${height}) must be greater than 0`);
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
