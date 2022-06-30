type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

const errorMessage: string = 'Any length cannot be 0 or less than 0';

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(errorMessage);
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'The longest side is equal or bigger than a sum of two others',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimetr = (a + b + c) / 2;
    const area = Math.sqrt(
      semiPerimetr
      * (semiPerimetr - a)
      * (semiPerimetr - b)
      * (semiPerimetr - c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
