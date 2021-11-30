export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  getArea(): number {
    const square: number = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(
        square * (square - this.a) * (square - this.b) * (square - this.c),
      ) * 100,
    ) / 100;
  }

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max: number = Math.max(a, b, c);

    const sum: number = [a, b, c].reduce((x, y) => {
      if (y === max) {
        return x;
      }

      return x + y;
    }, 0);

    if (max >= sum || [a, b, c].some((elem) => elem <= 0)) {
      throw new Error('Invalid data');
    }
  }
}

export class Circle implements Figure {
  shape = 'circle';

  getArea(): number {
    return Math.floor(
      Math.PI * this.radius ** 2 * 100,
    ) / 100;
  }

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid data');
    }
  }
}

export class Rectangle {
  shape = 'rectangle';

  getArea(): number {
    return this.width * this.height;
  }

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid data');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
