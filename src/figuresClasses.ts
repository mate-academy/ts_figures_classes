export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

export class Triangle implements Figure {
  public shape: 'triangle';

  public color: 'red' | 'green' | 'blue';

  constructor(
    public a: number,
    public b: number,
    public c: number,
    color: 'red' | 'green' | 'blue',
  ) {
    this.shape = 'triangle';
    this.color = color;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The side of a triangle cannot have a length equal to 0');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error(
        'One side cannot be greater than or equal to the sum of the other two.',
      );
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    return Math.sqrt(
      perimeter *
        (perimeter - this.a) *
        (perimeter - this.b) *
        (perimeter - this.c),
    );
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  constructor(
    public radius: number,
    color: 'red' | 'green' | 'blue',
  ) {
    this.shape = 'circle';
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('The radius of a circle cannot have a length <= 0');
    }
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    public width: number,
    public height: number,
    color: 'red' | 'green' | 'blue',
  ) {
    this.shape = 'rectangle';
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        'The side of a rectangle cannot have a length equal <= 0',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
