
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const sort: number[] = [a, b, c]
      .sort((first: number, last: number) => last - first);

    if (sort[0] >= (sort[1] + sort[2])) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(perimeter * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(
  figure: {
    shape: Shape,
    color: Color,
    getArea(): number,
  },
): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
