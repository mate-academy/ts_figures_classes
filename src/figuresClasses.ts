type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

function getTwoDecimalPlaces(area:number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((this.a <= 0 || this.b <= 0 || this.c <= 0)
    || (this.a >= this.b + this.c
    || this.b >= this.a + this.c
    || this.c >= this.a + this.b)) {
      throw new Error('ERROR - not a triangle');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number
      = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
        * (halfPerimeter - this.b) * (halfPerimeter - this.c));

    return getTwoDecimalPlaces(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('ERROR - not a circle');
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius ** 2);

    return getTwoDecimalPlaces(circleArea);
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('ERROR - not a rectangle');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return getTwoDecimalPlaces(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
