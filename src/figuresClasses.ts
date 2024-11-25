export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('one or more sides are less than or equal to 0');
    }

    const sortedSides: number[] = [a, b, c].sort(
      (side1, side2) => side2 - side1,
    );

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius less than or equal to 0');
    }
  }

  getArea(): number {
    const square = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('one or more sides are less than or equal to 0');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
