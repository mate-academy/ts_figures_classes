export interface Figure {
  shape: 'triangle'|'circle'|'rectangle';
  color: 'red'|'green'|'blue';
  getArea(): number,
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red'|'green'|'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("All triangle's sides should be more then zero");
    }

    if (a >= (b + c) || b >= (a + c) || c >= (b + a)) {
      throw new Error('Any side must be less than the sum of two other sides');
    }
  }

  getArea(): number {
    const sp: number = (this.a + this.b + this.c) / 2;
    const triangleSquare: number
     = ((sp * (sp - this.a) * (sp - this.b) * (sp - this.c)) ** 0.5);

    return Math.floor(triangleSquare * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red'|'green'|'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be more than zero');
    }
  }

  getArea(): number {
    const circleSquare: number = Math.PI * (this.radius ** 2);

    return Math.floor(circleSquare * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red'|'green'|'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Neither width nor height can be negative!');
    }
  }

  getArea(): number {
    const rectangleSquare: number = this.width * this.height;

    return Math.floor(rectangleSquare * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
