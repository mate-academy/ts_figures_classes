type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.isNotTriangle()) {
      throw new Error('Impossible to form a triangle with sides of such size.');
    }
  }

  isNotTriangle(): boolean {
    const sidesDoNotExist = this.a <= 0
      || this.b <= 0
      || this.c <= 0;

    const sidesAreNotValid = this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b;

    return sidesDoNotExist || sidesAreNotValid;
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.isNotCircle()) {
      throw new Error('The radius must be greater than 0 to form a circle.');
    }
  }

  isNotCircle(): boolean {
    return this.radius <= 0;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.isNotRectangle()) {
      throw new Error('Length and width must be > 0 to form a rectangle');
    }
  }

  isNotRectangle(): boolean {
    return this.height <= 0 || this.height <= 0;
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
