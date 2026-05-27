type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error('Side a must be greater than zero');
    }

    if (b <= 0) {
      throw new Error('Side b must be greater than zero');
    }

    if (c <= 0) {
      throw new Error('Side c must be greater than zero');
    }

    if (a + b <= c) {
      throw new Error('Invalid triangle sides: a + b must be greater than c');
    }

    if (b + c <= a) {
      throw new Error('Invalid triangle sides: b + c must be greater than a');
    }

    if (a + c <= b) {
      throw new Error('Invalid triangle sides: a + c must be greater than b');
    }
  }

  getArea = (): number => {
    const p = 0.5 * (this.a + this.b + this.c);

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  };
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea = (): number => Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width must be greater than zero');
    }

    if (height <= 0) {
      throw new Error('Height must be greater than zero');
    }
  }

  getArea = (): number => Math.floor(this.width * this.height * 100) / 100;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
