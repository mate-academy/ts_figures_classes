type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,

  ) {
    if (this.notCorrect()) {
      throw new Error('Side length is not correct');
    }
  }

  notCorrect(): boolean {
    const { a, b, c } = this;

    return (
      (a <= 0 || b <= 0 || c <= 0)
      || (a + b <= c || a + c <= b || b + c <= a)
    );
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfPerimetr = (a + b + c) / 2;
    const square = Math.sqrt(halfPerimetr
      * (halfPerimetr - a) * (halfPerimetr - b) * (halfPerimetr - c));

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,

  ) {
    if (this.radius <= 0) {
      throw new Error('Radius length is not correct');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,

  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter correct length');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
