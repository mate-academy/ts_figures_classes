export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle side lengths must be greater than 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(
        'Triangle inequality violated: provided sides cannot form a triangle',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const s = (a + b + c) / 2;

    return Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Number(
      (Math.floor(Math.PI * this.radius ** 2 * 100) / 100).toFixed(2),
    );
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

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
    const { width, height } = this;

    return Number((Math.floor(width * height * 100) / 100).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
