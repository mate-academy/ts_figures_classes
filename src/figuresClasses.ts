export interface Figure {
  shape: 'triangle'| 'circle' | 'rectangle',
  color: 'red'| 'green' | 'blue'
}

export class Triangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'triangle' = 'triangle';

  constructor(
    color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    const sides: number[] = [a, b, c].sort((sideA, sideB) => sideB - sideA);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Not a triangle!');
    }

    if (sides[0] >= (sides[2] + sides[1])) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);
    const result = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'circle' = 'circle';

  constructor(
    color: 'red' | 'green' | 'blue',

    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Not a Circle!');
    }
  }

  getArea(): number {
    const result = Math.PI * (this.radius ** 2);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'rectangle' = 'rectangle';

  width: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;

    if (width <= 0 || height <= 0) {
      throw new Error('Not a Rectangle!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Rectangle | Circle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
