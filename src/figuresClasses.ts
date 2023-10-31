type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
  shape: Shape,

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(public color: Color, public a: number, public b: number,
    public c: number) {
    this.shape = 'triangle';
    this.validator();
  }

  validator(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(
        `No side can be shorter than 0:
        a: ${this.a}, b: ${this.b}, c: ${this.c}`,
      );
    }

    const max = Math.max(this.a, this.b, this.c);

    if ((max === this.c && this.a + this.b <= max)
      || (max === this.a && this.c + this.b <= max)
      || (max === this.b && this.a + this.c <= max)) {
      throw new Error(
        `The longest side of a triangle cannot be
         shorter than the sum of the other two:
         a: ${this.a}, b: ${this.b}, c: ${this.c}`,
      );
    }
  }

  getArea(): number {
    const semiPerimeter = ((this.a + this.b + this.c) / 2);

    return Math.floor(Math.sqrt(
      semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c),
    ) * 100) / 100;
  }
}

export class Circle {
  shape: Shape;

  constructor(public color: Color,
    public radius: number) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error(
        `The side of the radius cannot be
         shorter than 0: radius: ${this.radius}`,
      );
    }
  }

  getArea(): number {
    return Math.floor(((this.radius * this.radius) * Math.PI) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  constructor(public color: Color,
    public width: number,
    public height: number) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        `No side can be shorter than 0: width:
         ${this.width}, height: ${this.height}`,
      );
    }
  }

  getArea(): number {
    return (this.width * this.height) * 100 / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
