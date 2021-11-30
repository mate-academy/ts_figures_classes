type Shape = 'triangle'|'circle'|'rectangle';

type Color = 'red'|'green'|'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number
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
      throw new Error('Side length of the triangle cannot be 0 or less');
    }

    const sortSides: number[] = [a, b, c].sort((x: number, y: number) => x - y);

    if (sortSides[0] + sortSides[1] <= sortSides[2]) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect radius length');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Incorrect rectangle side length');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
