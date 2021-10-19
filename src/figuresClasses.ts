type Color = 'red'| 'green' | 'blue';
export interface Figure {
  color: Color,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw Error('Length must be greater than 0');
    }

    const arr: number[] = [this.a, this.b, this.c];
    const max: number = Math.max(...arr);
    const rest: number[] = arr.filter((item: number) => item !== max);
    const sum: number
     = rest.reduce((prev: number, first: number) => first + prev);

    if (max >= sum) {
      throw Error('There is no such triangle');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.floor(100 * Math.sqrt(semiPerimeter * (semiPerimeter
        - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c))) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Length must be radius than 0');
    }
  }

  getArea(): number {
    const area: number = Math.floor(100 * Math.PI * this.radius ** 2) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Length must be than 0');
    }
  }

  getArea():number {
    const area: number = Math.floor(100 * this.width * this.height) / 100;

    return area;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
