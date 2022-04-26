type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
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
      throw new Error('Incorrect length');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Incorrect side of the triangle');
    }
  }

  public getArea(): number {
    const P = (this.a + this.b + this.c) / 2;

    const S = Math.sqrt(P * (P - this.a)
      * (P - this.b) * (P - this.c));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid data');
    }
  }

  public getArea(): number {
    const S = (Math.PI * (this.radius ** 2));

    return (Math.floor(S * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect height and width');
    }
  }

  public getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
