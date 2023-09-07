type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error in triangle: Any length is <= 0');
    }

    if ((this.c >= this.a + this.b)
      || (this.b >= this.c + this.a)
      || (this.a >= this.b + this.c)) {
      throw new Error('Error: The longest side of a '
      + 'triangle is >= than a sum of two others');
    }
  }

  getArea():number {
    const S = ((this.a + this.b + this.c) / 2);

    return +(Math.sqrt(S * (S - this.a)
    * (S - this.b) * (S - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error in circle: Any length is <= 0');
    }
  }

  getArea():number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error in rectangle: Any length is <= 0');
    }
  }

  getArea():number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
