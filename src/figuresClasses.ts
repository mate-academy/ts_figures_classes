type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape : Shape,
  color : Color,
  getArea() :number,
}

export class Triangle implements Figure {
  public shape:Shape = 'triangle';

  constructor(
    public color:Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('any triangle`s side should be larger than zero');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= (a + b + c) - longestSide) {
      throw new Error('longest side should be larger than'
      + 'sum of the other sides');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
     * (halfPerimeter - this.b)
     * (halfPerimeter - this.c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape:Shape = 'circle';

  constructor(
    public color:Color,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('radius should be larger than zero');
    }
  }

  getArea(): number {
    const circleS = Math.PI * this.radius ** 2;

    return Math.floor(circleS * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape:Shape = 'rectangle';

  constructor(
    public color:Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Both rectangle sides should be largest than zero');
    }
  }

  getArea(): number {
    const rectangleS = this.width * this.height;

    return Math.round(rectangleS * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
