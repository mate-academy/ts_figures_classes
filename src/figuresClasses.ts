type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' |'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,

  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
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

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.floor(
      Math.sqrt(halfPerimeter
        * (halfPerimeter - this.a)
        * (halfPerimeter - this.b)
        * (halfPerimeter - this.c)) * 100,
    ) / 100;

    return square;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius (${radius}) of a circle must be greater than 0`);
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  public color: Colors;

  public width: number;

  public height: number;

  constructor(color: Colors, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      // eslint-disable-next-line
      throw new Error(`Width (${width}) and heigth (${height}) must be greater than 0`);
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
