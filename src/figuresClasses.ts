export interface Figure {
  shape: string,
  color: string,
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw Error('Error! Sides could not be negative.'
      + 'Please, enter the positive value');
    }

    if ((this.a + this.b <= this.c)
        || (this.b + this.c <= this.a)
        || (this.c + this.a <= this.b)) {
      throw Error('Error! It is not a triangle.'
          + 'The sum of the lengths of any 2 sides of a triangle '
          + 'must be greater than the 3d side');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    area = Math.floor(area * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius < 0) {
      throw Error('Error! Radius could not be negative.'
      + 'Please, enter the positive value');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width < 0 || this.height < 0) {
      throw Error('Error! Sides could not be negative.'
      + 'Please, enter the positive value');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  const result = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
