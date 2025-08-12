export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Input data error!' +
          'Each side of the triangle must be greater than 0.',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'Triangle side lengths are invalid:' +
          'each side must be less than the sum of the other two.',
      );
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const triangleSquare = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Math.floor(triangleSquare * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Input data error! Radius must be > 0.');
    }
  }

  getArea(): number {
    const circleSq = Math.PI * this.radius ** 2;

    return Math.floor(circleSq * 100) / 100;
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
      throw new Error('Input data error! Width and height must be > 0.');
    }
  }

  getArea(): number {
    const rectangleSq = this.width * this.height;

    return Math.floor(rectangleSq * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  if (figure instanceof Triangle) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  } else if (figure instanceof Circle) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  } else {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }
}
