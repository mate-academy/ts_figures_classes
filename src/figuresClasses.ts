export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'The longest side must be less than the sum of the two others',
      );
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          halfPerimetr *
            (halfPerimetr - this.a) *
            (halfPerimetr - this.b) *
            (halfPerimetr - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
