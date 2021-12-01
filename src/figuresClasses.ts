export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Some of the sides has incorrect length');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    // return Math.trunc(area * 100) / 100;
    return +area.toFixed(2);
  }
}

export class Circle {
  public shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect radius value!');
    }
  }

  getArea(): number {
    const squareRadius: number = this.radius ** 2;

    return Math.trunc((Math.PI * squareRadius) * 100) / 100;
    // return +(Math.PI * squareRadius).toFixed(2);
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid heigth of width!');
    }
  }

  getArea(): number {
    return Math.trunc((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
